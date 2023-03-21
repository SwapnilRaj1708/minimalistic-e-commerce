import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Trending from "../components/Trending/Trending";
import useCart from "../hooks/use-cart";
import useProducts from "../hooks/use-products";
import "./ProductPage.css";

export default function ProductsPage() {
  const { cart, setCart } = useCart();
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.filter((product) => product.id === parseInt(id))[0];

  const [quantity, setQuantity] = useState(1);
  const {
    name,
    price,
    description,
    image,
    category,
    otherImages,
    texture,
    weight,
    size,
  } = product;

  const [displayImage, setDisplayImage] = useState(image);

  useEffect(() => {
    setDisplayImage(image);
    setQuantity(1);
  }, [id]);

  function handleClick(img) {
    setDisplayImage(img);
  }
  function handleQuantityIncrease() {
    setQuantity(quantity + 1);
  }
  function handleQuantityDecrease() {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  }

  function addToCart() {
    const item = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    };

    //check if item already exists in cart, if yes, increase quantity
    const itemExists = cart.filter((item) => item.productId === product.id)[0];
    if (itemExists) {
      const newCart = cart.map((item) => {
        if (item.productId === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart(newCart);
      return;
    }
    setCart((prev) => [...prev, item]);
  }

  return (
    <>
      <div className="product-container flex flex-col justify-center">
        <div className="product-title-container flex justify-center">
          <h1 className="product-title">{name}</h1>
        </div>
        <div className="product-content-container">
          <div className="product-images-container">
            <div className="product-image-container">
              <img className="main-image" src={displayImage} alt="Main" />
            </div>
            <div className="thumbnail-container">
              <div className="product-image-thumbnail product-image-thumbnails-1">
                <img
                  onClick={() => handleClick(image)}
                  className="thumbnail-image"
                  src={image}
                  alt="Thumbnail-1"
                />
              </div>
              <div className="product-image-thumbnail product-image-thumbnails-2">
                <img
                  onClick={() => handleClick(otherImages[0])}
                  className="thumbnail-image"
                  src={otherImages[0]}
                  alt="Thumbnail-2"
                />
              </div>
              <div className="product-image-thumbnail product-image-thumbnails-3">
                <img
                  onClick={() => handleClick(otherImages[1])}
                  className="thumbnail-image"
                  src={otherImages[1]}
                  alt="Thumbnail-3"
                />
              </div>
            </div>
          </div>
          <div className="product-description-container">
            <div className="product-description">{description}</div>
            <div className="product-description-bottom flex flex-col gap-12">
              <div className="product-quantity-container">
                <div>Quantity</div>
                <div className="quantity-container flex flex-row ">
                  <button
                    onClick={handleQuantityDecrease}
                    className="quantity-button quantity-button-1"
                  >
                    <AiOutlineMinus />
                  </button>
                  <div className="quantity-input">{quantity}</div>
                  <button
                    onClick={handleQuantityIncrease}
                    className="quantity-button quantity-button-2"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <div className="quantity-price">₹{price * quantity}</div>
              </div>
              <div className="product-buy-btn-container">
                <button onClick={addToCart} className="add-to-cart-btn">
                  ADD TO CART
                </button>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-container">
          <div className="product-detail-container">
            <div className="product-detail-title">Texture:</div>
            <div className="product-detail">{texture}</div>
          </div>
          <div className="product-detail-container">
            <div className="product-detail-title">Weight:</div>
            <div className="product-detail">{weight}</div>
          </div>
          <div className="product-detail-container">
            <div className="product-detail-title">Size:</div>
            <div className="product-detail">{size}</div>
          </div>
        </div>
      </div>
      <Trending />
    </>
  );
}
