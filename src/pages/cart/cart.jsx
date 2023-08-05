import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Sepetiniz</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="subtotal">
          <h2>Sepet Tutarı: {totalAmount.toLocaleString()} TL</h2>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/")}>Kataloğa Dön</button>
            <button onClick={() => {checkout(); navigate("/checkout");}}>
              Ödeme Yap
            </button>
          </div>
        </div>

      ) : (
        <h1> Şu Anda Boş</h1>
      )}
    </div>
  );
};