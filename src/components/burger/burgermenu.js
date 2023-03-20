import React from "react";
// slide, stack, elastic, bubble, push, pushRotate, scaleDown, scaleRotate, fallDown, reveal
import { elastic as Menu } from "react-burger-menu";
import "./burger.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <a className="bm-item" href="/">
        32iQ
      </a>
      <a className="bm-item" href="/search">
        SearchiQ
      </a>
      <a className="bm-item" href="/liveboard">
        Dashboard
      </a>
      <a className="bm-item" href="/uppy">
        File Upload
      </a>
    </Menu>
  );
};
export default BurgerMenu;
