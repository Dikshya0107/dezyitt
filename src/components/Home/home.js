import React from 'react';
import './home.css';
import { Slider } from './Slider';

const Home = () => (
  <div className="home">
    <div id="movetohome" aria-hidden="true" />
    <div className="sec1">
      <div className="frontText">
        <div className="hero-title-wrap">
          <h1 className="head4">
            Your personal <br />
            Design Sprint Master!
          </h1>
        </div>

        <p className="hero-tagline">Time to innovate? let Dezy it!</p>

        <div className="hero-download">
          <h2>Download Now!</h2>
          <p>And enjoy our Beta Version for free</p>
        </div>

        <div className="play">
          <a
            href="https://play.google.com/store/apps/details?id=com.dezy.it.design.sprint.design_sprint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="play_img"
              src="https://static.wixstatic.com/media/ec9816_c6b0bd2765b24062b66b05c49f167262~mv2.png/v1/crop/x_0,y_175,w_512,h_163/fill/w_135,h_43,al_c,q_95/GooglePlay-DezyIt.webp"
              alt="Get DezyIt on Google Play"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/dezy-it/id1549871606"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="play_img"
              src="https://static.wixstatic.com/media/ec9816_ddaf57d1e998457e9525f6cfbcd6a212~mv2.png/v1/crop/x_0,y_175,w_512,h_163/fill/w_136,h_43,al_c,q_95/AppStore-DezyIt.webp"
              alt="Download DezyIt on the App Store"
            />
          </a>
        </div>
      </div>
      <div className="carouselStyles">
        <Slider />
      </div>
    </div>
    <div className="sec2">
      <div className="img_div">
        <img
          className="sec2_img"
          src="https://static.wixstatic.com/media/ec9816_120f89a1570549e882031fbfb5ee5905~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp"
          alt="Design sprint and design thinking graphic"
        />
      </div>
      <div className="design">
        <h2 className="heading">What is a Design Sprint?</h2>
        <p className="text">
          The sprint is a five-day process for answering critical business questions through design,
          prototyping and testing ideas with customers. Developed at Google Ventures, it’s a
          “greatest hits” of business strategy, innovation, behaviour science, design thinking, and
          more—packaged into a battle-tested process that any team can use.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
