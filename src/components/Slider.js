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
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">スライドショー</h2>
      <Slider {...settings} className="relative">
        <div className="bg-gray-200 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">スライド 1</h3>
          <p className="mt-2 text-gray-700">これはスライド 1 の内容です。</p>
        </div>
        <div className="bg-gray-200 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">スライド 2</h3>
          <p className="mt-2 text-gray-700">これはスライド 2 の内容です。</p>
        </div>
        <div className="bg-gray-200 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">スライド 3</h3>
          <p className="mt-2 text-gray-700">これはスライド 3 の内容です。</p>
        </div>
        <div className="bg-gray-200 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">スライド 4</h3>
          <p className="mt-2 text-gray-700">これはスライド 4 の内容です。</p>
        </div>
        <div className="bg-gray-200 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">スライド 5</h3>
          <p className="mt-2 text-gray-700">これはスライド 5 の内容です。</p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
