import { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {};

  return (
    <div className="navbar">
      {/* <img src={logo} alt="" /> */}
      <a className="logo" href="#">
        AURORA
      </a>
      <img src={menu_open} className="nav-mob-open" />

      <ul className="nav-menu">
        <img src={menu_close} className="nav-mob-close" />

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
