import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Slick: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
  };
  return (
    <div className="top-slider con-min-width">
      <div className="con">
        <div className="my-slider-box-1">
          <div className="slick-container">
            <div className="slick-wrapper">
              <Slider {...settings}>
                <div className="slider-slide">
                  <div className="my-slider-box-1__prod-name">배고파 1</div>
                  <img src="https://picsum.photos/id/1/1500/600" alt="" />
                </div>
                <div className="slider-slide">
                  <div className="my-slider-box-1__prod-name">배고파 2</div>
                  <img src="https://picsum.photos/id/2/1500/600" alt="" />
                </div>
                <div className="slider-slide">
                  <div className="my-slider-box-1__prod-name">배고파 3</div>
                  <img src="https://picsum.photos/id/3/1500/600" alt="" />
                </div>
                <div className="slider-slide">
                  <div className="my-slider-box-1__prod-name">배고파 4</div>
                  <img src="https://picsum.photos/id/4/1500/600" alt="" />
                </div>
                <div className="slider-slide">
                  <div className="my-slider-box-1__prod-name">배고파 5</div>
                  <img src="https://picsum.photos/id/5/1500/600" alt="" />
                </div>
                <div className="slider-slide">
                  <div className="my-slider-box-1__prod-name">배고파 6</div>
                  <img src="https://picsum.photos/id/6/1500/600" alt="" />
                </div>
                <div className="slider-slide">
                  <div className="my-slider-box-1__prod-name">배고파 7</div>
                  <img src="https://picsum.photos/id/7/1500/600" alt="" />
                </div>
                <div className="slider-slide">
                  <div className="my-slider-box-1__prod-name">배고파 8</div>
                  <img src="https://picsum.photos/id/8/1500/600" alt="" />
                </div>
              </Slider>
            </div>
          </div>

          <div className="my-slider-box-1__nav">
            <div className="swiper-button-next cursor-big"></div>
            <div className="swiper-button-prev cursor-big"></div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Slick;
