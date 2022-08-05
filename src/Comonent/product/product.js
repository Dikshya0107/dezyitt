import React from 'react';
import { ImageSlider } from './ImageSlider';
import "./procduct.css";
export const Product = () => {
    return (
        <div className="product" style={{}}>
            <a id="movetoproduct"></a>
            <div style={{width: "1000px", alignContent: "center"}}>
                <div className="div1">
                <h1 className="head">Our Product</h1>
                <div style={{margin: '0 30px 30px 0'}}>
    
                            Dezy It, is your personal design sprint master.
                            It is your design thinking guide and companion to help you facilitate
                            design sprints, to innovate, pivot and improve on the user experience of your product.
                
                </div>
            </div>
            <div style={{display: 'flex' }}>
               <img src="https://static.wixstatic.com/media/ec9816_d153868311b743f09bc4f70c9b026aa2~mv2.png/v1/fill/w_328,h_397,al_c,q_95,enc_auto/Design%20Thinking%20Sprint%20-Right3_edited-min.png" alt="alt"/>
               <img src= "https://static.wixstatic.com/media/ec9816_4defd690a63a4903bfa597ea701c7925~mv2.png/v1/crop/x_0,y_0,w_1279,h_2060/fill/w_280,h_451,al_c,q_95,enc_auto/Design%20Thinking%20Sprint%20-%20Centre4-min.png" />
               <img src="https://static.wixstatic.com/media/ec9816_6cd8768722364df9bf50ae3489b6b618~mv2.png/v1/fill/w_328,h_400,al_c,q_95,enc_auto/Design%20Thinking%20Sprint%20-%20Left3_edited-min.png" alt="alt" />
               </div>  
            
            <div>
                <h4 style={{ padding: "0px" }}>Download Now!</h4>
                <h4 style={{ color: "#787cd1", padding: "0px" }}>And enjoy our Beta Version for free!</h4>
            </div>
            <div className="play">
                <a href="https://play.google.com/store/apps/details?id=com.dezy.it.design.sprint.design_sprint"><img className="play_img" src="https://static.wixstatic.com/media/ec9816_c6b0bd2765b24062b66b05c49f167262~mv2.png/v1/crop/x_0,y_175,w_512,h_163/fill/w_135,h_43,al_c,q_95/GooglePlay-DezyIt.webp" /></a>
                <a href="https://apps.apple.com/in/app/dezy-it/id1549871606">  <img className="play_img" src="https://static.wixstatic.com/media/ec9816_ddaf57d1e998457e9525f6cfbcd6a212~mv2.png/v1/crop/x_0,y_175,w_512,h_163/fill/w_136,h_43,al_c,q_95/AppStore-DezyIt.webp" /></a>
            </div>
</div>
        </div>
    )
}
