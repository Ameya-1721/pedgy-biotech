import "./Contact.css";

import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Pedgy Biotech Private Limited | Hyderabad Biotech Company</title>

        <meta
          name="description"
          content="Contact Pedgy Biotech Private Limited in Hyderabad for inquiries about our probiotic and kidney health solutions. Reach our team today."
        />

        <link rel="canonical" href="https://pedgy.in/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Pedgy Biotech Private Limited" />
        <meta
          property="og:description"
          content="Get in touch with Pedgy Biotech for kidney health and probiotic solutions."
        />
        <meta property="og:url" content="https://pedgy.in/contact" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Pedgy Biotech | Hyderabad" />
        <meta
          name="twitter:description"
          content="Reach our Hyderabad-based biotech team for product and business inquiries."
        />
      </Helmet>
      
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
    </>
  );
}
