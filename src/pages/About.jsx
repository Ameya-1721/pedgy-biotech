import "./About.css";
import aboutData from "../content/About.json"
import founderImage from "../assets/pedgy-founder.jpg";

import ReactMarkdown from "react-markdown";

export default function About() {
  const {content} = aboutData;
  return (
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
  );
}
