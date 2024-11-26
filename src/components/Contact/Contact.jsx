import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h2>Let&apos; talk</h2>
          <p>I&apos;m currently available to take on new opportunities, so feel free to send me message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} />
              <p>auduong.301@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} />
              <p>(+84)-367-217-652</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} />
              <p>Ho Chi Minh City</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />

          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}
