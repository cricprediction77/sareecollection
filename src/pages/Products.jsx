import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./products.css";

export default function Products() {
  const { category } = useParams();
  const navigate = useNavigate();

  const productsData = {
    sarees: [
      {
        id: 1,
        name: "Royal Silk Saree",
        price: "₹4,999",
        img: "https://thepannashop.com/cdn/shop/files/0O8A6207_54af12d3-77c0-41ae-b4a0-c03ade0459df_870x.jpg?v=1705038695",
      },
      {
        id: 2,
        name: "Wedding Banarasi",
        price: "₹7,499",
        img: "https://thepannashop.com/cdn/shop/files/0O8A9547_870x.jpg?v=1686904398",
      },
      {
        id: 3,
        name: "Designer Georgette",
        price: "₹3,299",
        img: "https://weaverstory.com/cdn/shop/files/SRN7709-2_b7b66704-52c3-41f8-8a71-f3ff4d9096ef.jpg?v=1718275273&width=940",
      },
      {
        id: 4,
        name: "Designer Georgette",
        price: "₹3,299",
        img: "https://manyavar.scene7.com/is/image/manyavar/SB17738_401-WHITE_401.34534_23-10-2024-17-26%3A650x900",
      },
      {
        id: 5,
        name: "Designer Georgette",
        price: "₹3,299",
        img: "https://houseofexotique.com/cdn/shop/files/Untitleddesign-2023-12-08T151602.287_cd3983cc-1f78-4cf3-b7ef-e036de5074a6.jpg?v=1703140972&width=1080",
      },
      {
        id: 6,
        name: "Designer Georgette",
        price: "₹3,299",
        img: "https://tse1.mm.bing.net/th/id/OIP.HZPcB8aTgBs5ND5lwtfqzgHaKQ?pid=Api",
      },
      {
        id: 7,
        name: "Designer Georgette",
        price: "₹3,299",
        img: "https://moviekoop.com/Images/News/Meenakshi-Chaudhary-In-White-Saree-8.jpg",
      },
      {
        id: 8,
        name: "Designer Georgette",
        price: "₹3,299",
        img: "https://assets.myntassets.com/h_200%2Cw_200%2Cc_fill%2Cg_auto/h_1440%2Cq_100%2Cw_1080/v1/assets/images/29575466/2024/5/15/0df2d9fc-911a-48b6-99ba-4bb94611e2961715792376826EtherealCharmBabyPinkEmbroideredNetSareebySangria1.jpg",
      },
    ],
    lehengas: [
      {
        id: 10,
        name: "Pastel Bridal Lehenga",
        price: "₹14,999",
        img: "https://images.openai.com/static-rsc-3/Ft_5S5C46ceM4-dULY9fdV9dHt3exfmtHIL7LwGPLIi2aKBVXRAe0hfOL_JeTE_dymgJWJvCB6LYYKETflWkZQhsFV9R6h4MefIxD3PuWN4?purpose=fullsize",
      },
      {
        id: 11,
        name: "Mirror Work Lehenga",
        price: "₹12,499",
        img: "https://clothsvilla.com/cdn/shop/files/MM-139-1_1024x1024.png?v=1698087862",
      },
      {
        id: 12,
        name: "Floral Print Lehenga",
        price: "₹9,999",
        img: "https://i.pinimg.com/474x/8e/bb/9c/8ebb9c3c63cb78bd893e6a364e8cc7c7.jpg",
      },
      {
        id: 13,
        name: "Ruffle Style Lehenga",
        price: "₹11,499",
        img: "https://clothsvilla.com/cdn/shop/products/LightPinkColorFloralPrintedDesignerLehengaCholi_2_1024x1024.jpg?v=1697222625",
      },
      {
        id: 14,
        name: "Velvet Bridal Lehenga",
        price: "₹16,999",
        img: "https://shopsanyagulati.com/cdn/shop/files/SG-28-08-230647.jpg?v=1694253941",
      },
      {
        id: 15,
        name: "Sequin Party Lehenga",
        price: "₹10,499",
        img: "https://amrut.co/cdn/shop/files/Cream_Floral_Print_Lehenga_Choli_with_Delicate_Pink_Dupatta_01.jpg?v=1731997209",
      },
      {
        id: 16,
        name: "Organza Pastel Lehenga",
        price: "₹13,299",
        img: "https://tapee.in/cdn/shop/products/C11181_1_900x.png?v=1663053040",
      },
      {
        id: 17,
        name: "Cape Style Designer Lehenga",
        price: "₹15,499",
        img: "https://i.pinimg.com/originals/e8/42/bc/e842bce42a7f1ad264968c761f9f526b.jpg",
      },
    ],

    offers: [
      {
        id: 6,
        name: "Festive Combo Saree",
        originalPrice: 4999,
        price: 2999,
        img: "https://m.media-amazon.com/images/I/81PAao7Vk2L._SX679_.jpg",
      },
      {
        id: 7,
        name: "Lehenga Sale Special",
        originalPrice: 7499,
        price: 4499,
        img: "https://5.imimg.com/data5/SELLER/Default/2021/4/MT/KT/BM/79669847/bridal-lehenga-500x500.jpg",
      },
      {
        id: 8,
        name: "Elegant Red Pure Kanchi Pattu Saree",
        originalPrice: 3599,
        price: 1569,
        img: "https://narayanisilks.in/cdn/shop/products/sa-pa-h9552085-red-fl-1_5cdd98a7-e800-4ff3-902f-027b1eb6ecb3.jpg?v=1698747368&width=1024",
      },
      {
        id: 9,
        name: "The Sreeleela Banaras Silk Saree",
        originalPrice: 3799,
        price: 1799,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBDJHQlwr7_CEwbtN5E_5FPxqB9pO2teKfg&s",
      },
    ],
  };

  let products = [];

  if (category === "all") {
    products = [...productsData.sarees, ...productsData.lehengas];
  } else {
    products = productsData[category] || [];
  }

  return (
    <div className="products-page">
      <div className="brand" onClick={() => navigate("/")}>
        <span className="moon">
          <span className="moon-shape"></span>
        </span>
        <h1>
          {category === "all"
            ? "Explore Our wardrobe"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            {category === "offers" ? (
              <div className="price-box">
                <span className="old-price">₹{item.originalPrice}</span>
                <span className="new-price">₹{item.price}</span>
                <span className="discount">
                  {Math.round(
                    ((item.originalPrice - item.price) / item.originalPrice) *
                      100,
                  )}
                  % OFF
                </span>
              </div>
            ) : (
              <p className="new-price">
                ₹{item.price.replace?.("₹", "") || item.price}
              </p>
            )}
            <div className="product-actions">
              <button className="buy-btn">Buy Now</button>
              <button
                className="ar-btn"
                onClick={() =>
                  navigate("/tryon", { state: { dress: item.img } })
                }
              >
                Virtual Trial
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
