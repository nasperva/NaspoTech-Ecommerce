import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./productDetails.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  // Find the product with the given ID
  const product = PRODUCTS.find((p) => p.id === Number(id));

  // If the product doesn't exist, return an error message
  if (!product) {
    return <div>Aradığınız ürün bulunamadı</div>;
  }

  // If the product exists, render its details
  const { productName, description, productImage, price } = product;

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={productImage} alt={productName} className="product-image" />
      </div>
      <div className="product-details-container">
        <h1 className="product-name">{productName}</h1>
        <div className="product-details">
          <p><b>Sıra Numarası:</b> {id}</p>
          <p><b>Fiyat:</b> {price} TL</p>
          <p><b>Açıklama:</b></p>
          <p> {description} </p>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              Sepete Ekle {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
      </div>
    </div>
  );
};
