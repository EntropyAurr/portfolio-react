import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import github_icon from "../../assets/github_icon.svg";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9e349fe8-1ade-49e1-9e8e-1a13dac42daf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
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

            <div className="contact-detail">
              <a href="https://github.com/EntropyAurr" target="blank">
                <img src={github_icon} />
                EntropyAurr
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" placeholder="Enter your name" name="name" />

          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" placeholder="Enter your email" name="email" />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>

          <button type="submit" className="contact-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
