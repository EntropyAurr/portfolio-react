import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import mail_icon from "../../assets/mail_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactMe() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Let&apos; talk</h1>
        <p>I&apos;m currently available to take on new opportunities, so feel free to send me message about anything that you want me to work on. You can contact anytime.</p>
      </div>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={mail_icon} text="auduong.301@gmail.com" />
          <ContactInfoCard iconUrl={github_icon} text="https://github.com/EntropyAurr" />
        </div>

        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
