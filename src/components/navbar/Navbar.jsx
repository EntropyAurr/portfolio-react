import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* <img src={logo} alt="" /> */}
      <a href="#">AURORA</a>

      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}
