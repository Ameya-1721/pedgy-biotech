import "./Home.css";
import homeData from "../content/Home.json";

import ReactMarkdown from "react-markdown";

export default function Home() {
  const {hero, content} = homeData;
  return (
    <div className="home">
      <section className="hero">
        <h1>Purely Built on Trust</h1>
        <p>
          <ReactMarkdown>

          </ReactMarkdown>
          {hero.p}
        </p>
      </section>

      <section className="content">
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

        <p className="highlight">
          <ReactMarkdown>
            {content["p-highlight"]}
          </ReactMarkdown>
        </p>
      </section>
    </div>
  );
}
