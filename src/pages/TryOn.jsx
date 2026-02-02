import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pose } from "@mediapipe/pose";
import "./tryon.css";

export default function TryOn() {
  const location = useLocation();
  const navigate = useNavigate();
  const sareeUrl = location.state?.dress;

  const [userPhoto, setUserPhoto] = useState(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const handleUpload = (e) => {
    if (!e.target.files[0]) return;
    setUserPhoto(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    if (!userPhoto || !sareeUrl) return;

    const pose = new Pose({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults((results) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = imgRef.current;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      if (!results.poseLandmarks) {
        console.log("No body detected");
        return;
      }

      const lm = results.poseLandmarks;

      const LShoulder = lm[11];
      const RShoulder = lm[12];
      const LHip = lm[23];
      const RHip = lm[24];
      const LAnkle = lm[27];
      const RAnkle = lm[28];

      const shoulderY = ((LShoulder.y + RShoulder.y) / 2) * canvas.height;
      const hipY = ((LHip.y + RHip.y) / 2) * canvas.height;
      const ankleY = Math.max(LAnkle.y, RAnkle.y) * canvas.height;

      const centerX =
        ((LShoulder.x + RShoulder.x + LHip.x + RHip.x) / 4) * canvas.width;

      const shoulderWidth = Math.abs(LShoulder.x - RShoulder.x) * canvas.width;
      const hipWidth = Math.abs(LHip.x - RHip.x) * canvas.width;
      const bodyHeight = ankleY - shoulderY;

      const saree = new Image();
      saree.crossOrigin = "anonymous";
      saree.src = sareeUrl;

      saree.onload = () => {
        ctx.save();

        // ---- BODY MASK SHAPE ----
        ctx.beginPath();

        // Left shoulder → left hip → left ankle
        ctx.moveTo(LShoulder.x * canvas.width, LShoulder.y * canvas.height);
        ctx.lineTo(LHip.x * canvas.width, LHip.y * canvas.height);
        ctx.lineTo(LAnkle.x * canvas.width, LAnkle.y * canvas.height);

        // Across ankles
        ctx.lineTo(RAnkle.x * canvas.width, RAnkle.y * canvas.height);

        // Right ankle → hip → shoulder
        ctx.lineTo(RHip.x * canvas.width, RHip.y * canvas.height);
        ctx.lineTo(RShoulder.x * canvas.width, RShoulder.y * canvas.height);

        ctx.closePath();
        ctx.clip();

        // ---- DRAW SAREE FITTED TO BODY ----
        ctx.globalAlpha = 0.92;

        ctx.drawImage(
          saree,
          centerX - shoulderWidth * 1.2,
          shoulderY - bodyHeight * 0.1,
          shoulderWidth * 2.4,
          bodyHeight * 1.2,
        );

        ctx.restore();

        // ---- PALLU OVER SHOULDER ----
        ctx.save();
        ctx.translate(LShoulder.x * canvas.width, LShoulder.y * canvas.height);
        ctx.rotate(-0.3);
        ctx.globalAlpha = 0.9;

        ctx.drawImage(
          saree,
          -shoulderWidth * 0.4,
          -bodyHeight * 0.1,
          shoulderWidth * 1.5,
          bodyHeight * 0.9,
        );

        ctx.restore();
      };
    });

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = userPhoto;
    image.onload = () => pose.send({ image });
  }, [userPhoto, sareeUrl]);

  return (
    <div className="tryon-page">
      <div className="brand" onClick={() => navigate(-1)}>
        <span className="moon">
          <span className="moon-shape"></span>
        </span>
        <h1>AI Virtual Try-On</h1>
      </div>

      <label className="upload-btn">
        Upload Full Body Photo
        <input type="file" accept="image/*" hidden onChange={handleUpload} />
      </label>

      <div className="canvas-area">
        {userPhoto && <img ref={imgRef} src={userPhoto} alt="user" hidden />}
        <canvas ref={canvasRef}></canvas>
      </div>

      <p className="hint">Stand straight, full body visible for best result</p>
    </div>
  );
}
