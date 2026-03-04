import "./About.css";
import aboutData from "../content/About.json"
import founderImage from "../assets/pedgy-founder.jpg";

import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";

export default function About() {
  const {content} = aboutData;
  return (
    <>
      <Helmet>
        <title>About Pedgy Biotech Private Limited | Kidney Health Innovators</title>

        <meta
          name="description"
          content="Learn about Pedgy Biotech Private Limited, a Hyderabad-based biotech company focused on innovative probiotic solutions for kidney health and nephrology care."
        />

        <link rel="canonical" href="https://pedgy.in/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Pedgy Biotech Private Limited" />
        <meta
          property="og:description"
          content="Discover our mission, vision and commitment to kidney health innovation."
        />
        <meta property="og:url" content="https://pedgy.in/about" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Pedgy Biotech Private Limited" />
        <meta
          name="twitter:description"
          content="Hyderabad-based biotech company focused on probiotic kidney health solutions."
        />
      </Helmet>

      <div className="about-container">
        <div className="about-image">
          <img src={founderImage} alt="Sanjay Pedgaonkar" />
        </div>

        <div className="about-content">
          <h1>About the Founder</h1>
          <h2>Sanjay Pedgaonkar</h2>

          <p>
            <ReactMarkdown>
              {content.p1}
            </ReactMarkdown>
          </p>

          <p>
            <ReactMarkdown>
              {content.p2}
            </ReactMarkdown>
          </p>

          <p>
            <ReactMarkdown>
              {content.p3}
            </ReactMarkdown>
          </p>

          <p>
            <ReactMarkdown>
              {content.p4}
            </ReactMarkdown>
          </p>

          <p className="mission">
            {content["p-mission"]}
          </p>
        </div>
      </div>
    </>
  );
}
