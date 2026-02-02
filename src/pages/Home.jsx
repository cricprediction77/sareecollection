import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
<button>Add to Cart</button>;
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Header Brand */}
      <div className="brand">
        <span className="moon">
          <span className="moon-shape"></span>
        </span>
        <h1>Saree Saga</h1>
      </div>

      {/* Shop Now Button */}
      <button className="shop-btn" onClick={() => navigate("/products/all")}>
        Shop Now
      </button>

      {/* Category Cards */}
      <div className="category-grid">
        <div className="card">
          <img src="/images/saree1.png" alt="Ethereal Sarees" />
          <h2>Ethereal Sarees</h2>
          <p>Discover the Elegance</p>
          <button onClick={() => navigate("/products/sarees")}>
            View More
          </button>
        </div>

        <div className="card">
          <img
            className="lehenga1"
            src="/images/lehenga1.png"
            alt="Trendy Lehengas"
          />
          <h2>Trendy Lehengas</h2>
          <p>Glam Up in Style</p>
          <button onClick={() => navigate("/products/lehengas")}>
            Shop Lehengas
          </button>
        </div>

        <div className="card small">
          <div className="tryon-text">
            <h2>Virtual Try-On</h2>
            <p>Try Your Look in 3D</p>
            <button>Start Try-On</button>
          </div>
          <img src="/images/model.png" alt="Try On" />
        </div>

        <div className="card small">
          <div>
            <h2>Exclusive Offers</h2>
            <p>Limited Time Deals</p>
            <button onClick={() => navigate("/products/offers")}>
              Grab Deals
            </button>
          </div>
          <img src="/images/gifts.png" alt="Offers" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div>
          🏠<span>Home</span>
        </div>
        <div>
          🔍<span>Search</span>
        </div>
        <div>
          🛍<span>Cart</span>
        </div>
      </div>
    </div>
  );
}
