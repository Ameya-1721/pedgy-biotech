import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <form
          action="mailto:info@pedgy.in"
          method="post"
          encType="text/plain"
        >
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="tel" name="Phone" placeholder="Phone Number" required />
          <input type="email" name="Email" placeholder="Email" required />
          <textarea
            name="Query"
            placeholder="Write your query here..."
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
