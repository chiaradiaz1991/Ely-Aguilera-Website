import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      className="scroll-to-top"
    >
      <BsFillArrowUpCircleFill color="#ff8a80" size={60} />
    </button>
  );
};

export default ScrollButton;
