import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container flex flex-col justify-center items-center gap-5 p-10">
      <div className="footer-links flex flex-row justify-center items-center gap-4 flex-wrap">
        <p>About</p>
        <p>Store</p>
        <p>locator</p>
        <p>FAQs</p>
        <p>News</p>
        <p>Careers</p>
        <p>Contact</p>
        <p>Us</p>
      </div>
      <div className="footer-social flex flex-row justify-center items-center gap-1">
        <span className="flex">Created by </span>
        <a href="https://github.com/SwapnilRaj1708" target="_blank">
          Swapnil Raj
        </a>
      </div>
    </div>
  );
}
