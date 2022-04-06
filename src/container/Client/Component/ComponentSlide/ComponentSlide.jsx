import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

import "./ComponentSlide.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "none",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "none",
            }}
            onClick={onClick}
        />
    );
}

const ComponentSlide = (props) => {
    const { data, button } = props;
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 380,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    centerMode: true,
                    swipeToSlide: true,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 642,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    centerMode: true,
                    slidesToScroll: 4,
                    swipeToSlide: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
        ],
    };
    return (
        <>
            <div className="relative dt:w-container mx-auto px-10px bg-[#fff] shadow-shadow-primary dt:rounded-bd8">
                <div
                    onClick={() => sliderRef.current.slickPrev()}
                    className="my-arrow arrow-prev absolute left-[0.65rem] hidden dt:flex"
                >
                    <MdOutlineArrowLeft />
                </div>
                <Slider
                    ref={sliderRef}
                    {...settings}
                    className="relative w-full mt-[1.25rem]  py-10px dt:w-[90%] mx-auto"
                >
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="w-full dt:w-[25%] flex flex-col dt:px-10px py-10px "
                        >
                            <div className="flex justify-center items-center">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-[70%] dt:w-full"
                                />
                            </div>
                            <div className="flex flex-col h-[5rem] tl:h-[5.5rem] dt:h-[6rem] text-center pt-[0.2rem]">
                                <h2 className="text-[0.9rem]  font-semibold ">
                                    {item.name}
                                </h2>
                                <strong className="text-[0.85rem] font-bold text-color-red mt-[0.2rem]">
                                    {item.price}
                                </strong>
                            </div>
                            <div
                                style={
                                    button
                                        ? {
                                              display: "none",
                                          }
                                        : {
                                              display: "flex",
                                          }
                                }
                                className="justify-center items-center dt:pb-[2rem]"
                            >
                                <button className="px-[3.5rem] py-[0.55rem] tl:px-[1.5rem] tl:py-[0.35rem] text-[#fff] text-[0.9rem] font-semibold bg-gradient-to-b from-[#ff1c1c] to-[#710000] rounded-[0.25rem] shadow-shadow-primary">
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div
                    onClick={() => sliderRef.current.slickNext()}
                    className="my-arrow arrow-next absolute right-[0.65rem] hidden dt:flex"
                >
                    <MdOutlineArrowRight />
                </div>
            </div>
        </>
    );
};

export default ComponentSlide;
