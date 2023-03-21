import React from "react";
import { RxCross2 } from "react-icons/rx";
import useCart from "../../hooks/use-cart";

export default function CartItem({ id, image, name, price, quantity }) {
  const { cart, setCart } = useCart();

  const removeItem = () => {
    const newCart = cart.filter((item) => item.productId !== id);
    setCart(newCart);
  };

  const increaseQuantity = () => {
    const newCart = cart.map((item) => {
      if (item.productId === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(newCart);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    const newCart = cart.map((item) => {
      if (item.productId === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <div className="cart-item border flex flex-row justify-between w-full">
      <div className="cart-item-img-container">
        <img src={image} alt="cart-item" />
      </div>
      <div className="cart-details-container flex flex-col justify-between">
        <div className="cart-item-details">
          <div className="cart-item-name text-xl">{name}</div>
          <div className="cart-item-price font-semibold text-lg">
            {price * quantity}
          </div>
        </div>
        <div className="cart-item-quantity-container flex justify-between">
          <div className="cart-item-quantity flex">
            <button
              onClick={decreaseQuantity}
              className="cart-item-quantity-btn"
            >
              -
            </button>
            <span className="cart-item-quantity-number">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="cart-item-quantity-btn"
            >
              +
            </button>
          </div>
          <button onClick={removeItem}>
            <RxCross2 />
          </button>
        </div>
      </div>
    </div>
  );
}
