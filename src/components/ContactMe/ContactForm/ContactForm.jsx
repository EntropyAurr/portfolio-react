import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>

        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Enter your message"></textarea>

        <button>Send</button>
      </form>
    </div>
  );
}
