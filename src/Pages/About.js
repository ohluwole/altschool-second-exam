import React from "react";
import "./About.css";
import { Helmet } from "react-helmet-async";
import pic_1 from "../Desert-Webpage-Img/pic-1.png";
import pic_2 from "../Desert-Webpage-Img/pic-2.png";
import pic_3 from "../Desert-Webpage-Img/pic-3.png";
import pic_4 from "../Desert-Webpage-Img/pic-4.png";

function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="About" content="Explore the various deserts in sahara"/>
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <h1>Explore</h1>
      </div>
      <div className="desert-1">
        <div className="west-wrap">
          <h3>Western Desert</h3>
          <img className="west" src={pic_1} alt="western-desert" />
          <a
            className="details"
            href="https://en.wikipedia.org/wiki/Western_Desert_(Egypt)" target="_blank" rel="noopener noreferrer"
          >
            Details
          </a>
        </div>
        <div className="al-wrap">
          <h3>Al Bagawat</h3>
          <img className="al" src={pic_2} alt="al-bagawat" />
          <a
            className="details"
            href="https://en.wikipedia.org/wiki/El_Bagawat" target="_blank" rel="noopener noreferrer"
          >
            Details
          </a>
        </div>
      </div>
      <div className="desert-2">
        <div className="pyramid-wrap">
          <h3>Pyramid of Giza</h3>
          <img className="giza" src={pic_3} alt="pyramid-of-giza" />
          <a
            className="details"
            href="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza" target="_blank" rel="noopener noreferrer"
          >
            Details
          </a>
        </div>
        <div className="kalahari-wrap">
          <h3>Kalahari Desert</h3>
          <img className="kala" src={pic_4} alt="kalahari-desert" />
          <a
            className="details"
            href="https://en.wikipedia.org/wiki/Kalahari_Desert" target="_blank" rel="noopener noreferrer"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
