import { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import logo1 from "../../assets/logo-1.png";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-35rem";
  };

  return (
    <div className="navbar">
      <div className="logo">
        <span>AURORA</span>
        <img src={logo1} />
      </div>

      <img src={menu_open} onClick={openMenu} className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />

        <li>
          <AnchorLink className="anchor-link" href="#home" offset={50}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#myworks" offset={50}>
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? <img src={underline} /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}
