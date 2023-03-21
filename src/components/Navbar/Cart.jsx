import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import { RxCross1, RxCross2 } from "react-icons/rx";
import CartItem from "./CartItem";
import useProducts from "../../hooks/use-products";
import useCart from "../../hooks/use-cart";
import cartImage from "../../assets/img/cart/empty-cart.png";

export default function Cart({ handleClose }) {
  const { products } = useProducts();

  const { cart, setCart } = useCart();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const portalElement = document.querySelector(".cart-container");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cartMargin = windowWidth > 1536 ? (windowWidth - 1536) / 2 : 0;

  const renderedCartItem = cart.map((item) => {
    const product = products.filter(
      (product) => product.id === item.productId
    )[0];

    return (
      <CartItem
        key={item.productId}
        id={item.productId}
        image={product.image}
        name={product.name}
        price={product.price}
        quantity={item.quantity}
      />
    );
  });

  const subtotal = cart.reduce((acc, item) => {
    const product = products.filter(
      (product) => product.id === item.productId
    )[0];
    return acc + product.price * item.quantity;
  }, 0);

  const isCartEmpty = cart.length === 0;

  const emptyCart = (
    <div className="empty-cart flex flex-col justify-center items-center h-full">
      <div className="empty-cart-img">
        <img src={cartImage} alt="empty-cart" />
      </div>
      <div className="empty-cart-text text-center">
        <div className="empty-cart-heading font-bold text-xl mt-8 mb-6">
          Your cart is empty
        </div>
        <button onClick={handleClose} className="keep-browsing-btn">
          Keep Browsing
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    <>
      <div
        onClick={handleClose}
        className="cart-bg fixed z-20 inset-0 opacity-80"
      ></div>
      <div
        style={{ marginRight: cartMargin }}
        className="cart z-20 fixed flex flex-col justify-between bg-white"
      >
        <div className="cart-heading flex flex-row justify-between items-center w-full">
          <span>
            Your Shopping Cart{cart.length ? ` (${cart.length})` : null}
          </span>
          <button onClick={handleClose}>
            <RxCross1 />
          </button>
        </div>
        <div
          className={`shopping-cart ${
            cart.length > 0 ? "border" : ""
          } my-2 flex flex-col w-full h-full`}
        >
          {isCartEmpty ? emptyCart : renderedCartItem}
        </div>
        <div className="subtotal-container flex flex-row justify-between w-full">
          <div className="flex flex-col justify-end items-start h-full">
            <div className="subtotal-heading">Subtotal:</div>
            <div className="subtotal-price text-2xl">₹{subtotal}</div>
          </div>
          <div className="flex flex-col justify-end items-center h-full">
            <button className="checkout-btn">Go to Checkout</button>
          </div>
        </div>
      </div>
    </>,
    portalElement
  );
}
