import React from 'react'
import {Carousel, CarouselItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export const ImageSlider = () => {
    return (
        <div>
            <Carousel  controls={false} indicators={false}>
                <Carousel.Item interval={1000}>
                    <img  src ="https://static.wixstatic.com/media/ec9816_ae5fd32a575b4a3db1445d009625957f~mv2.png/v1/fill/w_350,h_563,al_c,q_95/Design%20Thinking%20Sprint%20-%20Centre4.webp" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src ="https://static.wixstatic.com/media/ec9816_800d931e29254171b6830e1dfa0fd6b0~mv2.png/v1/fill/w_360,h_584,al_c,q_95,enc_auto/DesignSprint-Prototype-min.png" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src ="https://static.wixstatic.com/media/ec9816_e7ca8a52008c431f8e947737e7857629~mv2.png/v1/fill/w_360,h_582,al_c,q_95,enc_auto/Design%20Thinking%20Sprint%20-%20Centre1-min.png" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
