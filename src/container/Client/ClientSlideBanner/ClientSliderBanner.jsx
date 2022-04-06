import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

import "./ClientSliderBanner.css";

import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";
import { useRef } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const listImage = [
  {
    url: banner1,
  },
  {
    url: banner2,
  },
  {
    url: banner3,
  },
];

const ClientSlideBanner = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <>
      {" "}
      <div className="relative dt:w-container mx-auto z-[-1]">
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="my-arrow arrow-prev absolute left-[1.5rem] hidden "
        >
          <MdOutlineArrowLeft />
        </div>

        <Slider
          ref={sliderRef}
          {...settings}
          className="mt-[1.25rem] w-full dt:h-[29.5rem] "
        >
          {listImage.map((item, i) => (
            <img src={item.url} className="w-full h-full bg-cover" key={i} />
          ))}
        </Slider>

        <div
          onClick={() => sliderRef.current.slickNext()}
          className="my-arrow arrow-next absolute right-[1.5rem] hidden "
        >
          <MdOutlineArrowRight />
        </div>
      </div>
    </>
  );
};

export default ClientSlideBanner;
