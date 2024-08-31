import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2> スライドショー </h2>
      <Slider {...settings}>
        <div>
          <h3>スライド 1</h3>
        </div>
        <div>
          <h3>スライド 2</h3>
        </div>
        <div>
          <h3>スライド 3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
