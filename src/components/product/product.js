import React from 'react';
import './product.css';

export const Product = () => {
  return (
    <section className="product">
      <div id="movetoproduct" aria-hidden="true" />
      <div className="product__inner">
        <h1 className="head">Our Product</h1>
        <p className="product__description">
          Dezy It, is your personal design sprint master. It is your design thinking guide and
          companion to help you facilitate design sprints, to innovate, pivot and improve on the
          user experience of your product.
        </p>
        <div className="product__images">
          <img
            src="https://static.wixstatic.com/media/ec9816_d153868311b743f09bc4f70c9b026aa2~mv2.png/v1/fill/w_328,h_397,al_c,q_95,enc_auto/Design%20Thinking%20Sprint%20-Right3_edited-min.png"
            alt="Design thinking sprint illustration"
          />
          <img
            src="https://static.wixstatic.com/media/ec9816_4defd690a63a4903bfa597ea701c7925~mv2.png/v1/crop/x_0,y_0,w_1279,h_2060/fill/w_280,h_451,al_c,q_95,enc_auto/Design%20Thinking%20Sprint%20-%20Centre4-min.png"
            alt="Design thinking sprint center illustration"
          />
          <img
            src="https://static.wixstatic.com/media/ec9816_6cd8768722364df9bf50ae3489b6b618~mv2.png/v1/fill/w_328,h_400,al_c,q_95,enc_auto/Design%20Thinking%20Sprint%20-%20Left3_edited-min.png"
            alt="Design thinking sprint left illustration"
          />
        </div>
        <div className="product__download">
          <h4>Download Now!</h4>
          <h4 className="product__subtitle">And enjoy our Beta Version for free!</h4>
        </div>
        <div className="product__stores">
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
    </section>
  );
};
