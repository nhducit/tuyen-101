import "./styles.css";
import * as React from "react";
let SUSHI_SHOP = [
  {
    id: 1,
    productImage: "https://picsum.photos/400/200",
    productName: "Cá Lóc đồng tự nhiên",
    description:
      "Cá Lóc đồng tự nhiên, đánh bắt tại Kiên Giang. Cá lóc cân sống, rồi làm sạch, phi lê theo nhu cầu.",
    price: "150.000",
    rating: "5*",
  },
  {
    id: 2,
    productImage: "https://picsum.photos/400/200",
    productName: "Cua đồng tự nhiên",
    description:
      "Cua đồng tự nhiên, đánh bắt tại Kiên Giang. Cua cân sống, rồi làm sạch, xay theo nhu cầu.",
    price: "100.000",
    rating: "5*",
  },
];
export default function App() {
  return (
    // JSX: it looks like HTML but it's not HTML
    <div>
      <div className="header">
        <div className="logo">logo</div>
        <div className="shopName">Sushi Shop</div>
        <div className="search">search</div>
        <div className="notion">notion</div>
        <div className="nameSignIn">namesignIn</div>
      </div>
      <div className="productGrid">
        {SUSHI_SHOP.map((product) => {
          return (
            <div key={product.id} className="productCard">
              <img
                className="productImage"
                src={product.productImage}
                alt="test"
              ></img>
              <div className="productName">{product.productName}</div>
              <div className="description">{product.description}</div>
              <div className="price-container">
                <div className="price">{product.price}</div>
                <div className="currency">đồng/kg</div>
              </div>
              <div className="rating">{product.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// // how to create React component
// function ProductCard(){

// }
