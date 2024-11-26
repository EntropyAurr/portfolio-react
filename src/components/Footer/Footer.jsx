import "./Footer.css";
import logoCoffee from "../../assets/logoCoffee.png";
import user_icon from "../../assets/user_icon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logoCoffee} />
          <p>I am a Front-end Developer with experiences in ...</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} />
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bototm">
        <p className="footer-bottom-left">&copy; 2024 Aurora. All rights reserved.</p>

        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
}
