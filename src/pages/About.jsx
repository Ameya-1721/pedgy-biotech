import "./About.css";
import founderImage from "../assets/pedgy-founder.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={founderImage} alt="Sanjay Pedgaonkar" />
      </div>

      <div className="about-content">
        <h1>About the Founder</h1>
        <h2>Sanjay Pedgaonkar</h2>

        <p>
          I am Sanjay Pedgaonkar, a seasoned professional with an extensive
          25-year journey in healthcare leadership. Over the past decade, I have
          immersed myself deeply in the field of nephrology, strategically
          positioning myself across key regions in India.
        </p>

        <p>
          My experience spans South India (Andhra Pradesh, Telangana, Tamil Nadu,
          Kerala, Karnataka), West India (Maharashtra, Mumbai, Madhya Pradesh,
          Gujarat, Chhattisgarh), and particularly the North-West regions
          (Rajasthan, Punjab, Haryana, Delhi-NCR, Jammu).
        </p>

        <p>
          My specialization lies in the niche area of probiotic marketing in CKD,
          with products such as <strong>Lobun</strong> and
          <strong> Oxalo Forte</strong>, where I pioneered innovative strategies
          to enhance patient outcomes and elevate brand presence.
        </p>

        <p>
          Through strong collaboration and innovation, I have built enduring
          relationships with leading nephrology KOLs and channel partners,
          driving impactful solutions across the healthcare ecosystem.
        </p>

        <p className="mission">
          I remain committed to making a lasting impact in the field of
          nephrology — through trust, innovation, and patient-centric care.
        </p>
      </div>
    </div>
  );
}
