import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bannerUm from '../imagens/banner.jpg';
import bannerDois from '../imagens/Banner-01.jpg';
import bannerTres from '../imagens/banho-e-tosa.png'

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={bannerUm} className="carousel-img" alt="Banner 1" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bannerDois} className="carousel-img" alt="Banner 2" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bannerTres} className="carousel-img" alt="Banner 3" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

