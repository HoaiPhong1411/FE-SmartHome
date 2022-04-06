import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
    AiOutlineLike,
    AiOutlineHeart,
    AiOutlineDislike,
} from "react-icons/ai";

import "../ClientDetailProduct/style.css";

import { FreeMode, Navigation, Thumbs } from "swiper";
import ClientSlideProduct from "../ClientSlideProduct/ClientSlideProduct";
import ComponentSlide from "../Component/ComponentSlide/ComponentSlide";

const data = [
    {
        name: "Apple iPhone 13 Pro Max",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-17.png",
        price: "28,950,000 ₫",
    },
    {
        name: "Apple iPad Pro M1 12.9",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
        price: "24,790,000 ₫",
    },
    {
        name: "OPPO Reno7 Z 5G",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png",
        price: "10,490,000 ₫",
    },
    {
        name: "Nokia C20",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/17/image-removebg-preview-5.png",
        price: "2,240,000 ₫",
    },
    {
        name: "Samsung Galaxy Tab S6 Lite",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/27/image-removebg-preview%20(4)_637394050254302727.png",
        price: "9,090,000 ₫",
    },
    {
        name: "Laptop Apple M1 - MacBook Air 13",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/23/capture.PNG",
        price: "29,390,000 ₫",
    },
    {
        name: "Apple iPad Pro M1 12.9 dsad saa asd asds as sad sadsa",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
        price: "24,790,000 ₫",
    },
    {
        name: "OPPO Reno7 Z 5G",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png",
        price: "10,490,000 ₫",
    },
    {
        name: "Nokia C20",
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/17/image-removebg-preview-5.png",
        price: "2,240,000 ₫",
    },
];
const fakeData = [
    {
        displayName: "Hoài Phong",
        textComment: "Sản phẩm như cc",
    },
    {
        displayName: "Trọng Khánh",
        textComment: "Sản phẩm như đbrr",
    },
    {
        displayName: "Nam Nhi",
        textComment: "Uy tín, chất lượng sẽ quay lại lần sau",
    },
    {
        displayName: "Ronaldo",
        textComment: "siuuuuuuuu",
    },
];

const DetailProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [click, setClick] = useState(false);
    const handleClick = (e) => {
        setClick(e.target.id);
        const items = document.querySelectorAll(".active");
        items.forEach((item) => {
            item.classList.remove("style_border");
            if (item.id == e.target.id) {
                item.classList.toggle("style_border");
            }
        });
    };
    const handleReact = (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case "like": {
                e.target.classList.toggle("blue");
                break;
            }

            case "heart": {
                e.target.classList.toggle("red");
                break;
            }
            case "dis": {
                e.target.classList.toggle("dis");
                break;
            }
        }
    };
    // const reaction = querySelectorAll;

    return (
        // container detailproduct
        <div className="mt-16 flex flex-col px-[8px] mb-20 tl:w-container tl:mt-20 tl:mx-auto dt:w-container dt:mx-auto ">
            <div>
                <h3 className="text-18px text-primary font-bold">
                    Điện thoại iPhone 13 Pro Max 256GB
                </h3>
            </div>
            {/* container left and right */}
            <div className="flex flex-col tl:flex-row tl:justify-between tl:mt-6  ">
                {/* left */}
                <div className="w-[96%] h-[250px] tl:w-[45%] tl:h-[500px] ">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#057566",
                            "--swiper-pagination-color": "#057566",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {data?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {data?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item.image} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                </div>
                {/* right */}
                <div className="tl:w-[45%]">
                    <div className="px-[0.5rem] flex flex-col gap-2 dt:gap-4 ">
                        {/* <p className="text-primary font-medium">
                            Điện thoại iPhone 13 Pro Max 256GB
                        </p> */}
                        <div className="flex  justify-start gap-4 items-center  h-[3rem] dt:items-start ">
                            <div>
                                <button
                                    id="3"
                                    className="active bg-[#ffff] text-[black] font-normal  px-[12px] py-[2px]  "
                                    onClick={handleClick}
                                >
                                    White
                                </button>
                            </div>
                            <div className="">
                                <button
                                    id="2"
                                    className="active  text-[#ffff] bg-[#333] font-normal  px-[12px] py-[2px]  "
                                    onClick={handleClick}
                                >
                                    Black
                                </button>
                            </div>
                            <div>
                                <button
                                    id="1"
                                    className="active  style_border text-[ #5a5a5a  ] font-normal px-[12px] py-[2px]"
                                    onClick={handleClick}
                                >
                                    Gray
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <p className="font-medium text-18px text-second">
                                Giá :
                            </p>
                            <span className="text-[red] font-bold text-18px ">
                                33.990.000 $
                            </span>
                        </div>
                        <div>
                            <button
                                disabled
                                className=" bg-[#057566] text-[#ffff] py-[3px] px-[28px] block "
                            >
                                Add to cart
                            </button>
                        </div>
                        <div className="tl:flex tl:flex-col tl:gap-4">
                            <h4 className="text-primary font-medium text-18px mb-[12px]">
                                Mô tả sản phẩm
                            </h4>
                            <Link
                                to="/product"
                                className="text-[15px] font-medium text-primary tl:text-18px"
                            >
                                iPhone 13 Pro Max 256GB
                            </Link>
                            <p className="text-13px text-primary leading-5">
                                -siêu phẩm được mong chờ nhất ở nửa cuối năm
                                2021 đến từ Apple. Máy có thiết kế không mấy đột
                                phá khi so với người tiền nhiệm, bên trong đây
                                vẫn là một sản phẩm có màn hình siêu đẹp, tần số
                                quét được nâng cấp lên 120 Hz mượt mà, cảm biến
                                camera có kích thước lớn hơn, cùng hiệu năng
                                mạnh mẽ với sức mạnh đến từ Apple A15 Bionic,
                                sẵn sàng cùng bạn chinh phục mọi thử thách,cảm
                                biến camera có kích thước lớn hơn, cùng hiệu
                                năng mạnh mẽ với sức mạnh đến từ Apple A15
                                Bionic, sẵn sàng cùng bạn chinh phục mọi thử
                                thách,cảm biến camera có kích thước lớn hơn,
                                cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple
                                A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử
                                thách,cảm biến camera có kích thước lớn hơn,
                                cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple
                                A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử
                                thách
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tl:flex px-[4px]">
                <div className=" flex flex-col gap-4">
                    <p className="tl:text-18px text-primary">
                        Đánh giá sản phẩm của khách hàng
                    </p>
                    {fakeData.map((item, index) => (
                        <div className=" border-[1px] border-[#057566] px-[8px] tl:w-[100%]  ] py-[3px]">
                            <div className="flex items-center text-hover gap-2 h-auto">
                                <p key={index}>{item.displayName}</p>
                                <span className="text-[10px] italic">
                                    đã mua hàng tại Smarthome
                                </span>
                            </div>
                            <div
                                className="flex justify-between
                                    items-center text-[20px] "
                            >
                                <p className="text-13px">{item.textComment}</p>
                                <div className="flex gap-3 items-center ">
                                    <AiOutlineLike
                                        className=""
                                        id="like"
                                        onClick={handleReact}
                                    />

                                    <AiOutlineHeart
                                        className=""
                                        id="heart"
                                        onClick={handleReact}
                                    />

                                    <AiOutlineDislike
                                        className=""
                                        id="dis"
                                        onClick={handleReact}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="box-border">
                        <textarea
                            name=""
                            id=""
                            cols="60"
                            rows="3"
                            placeholder="bạn thấy sản phẩm như thế nào??..."
                            className="placeholder:text-13px placeholder:p-[8px] text-13px p-[8px] outline-[#057566] w-[350px] tl:w-[570px] "
                        />
                    </div>
                    <div>
                        <button className=" bg-[#057566] text-[#ffff] py-[3px] px-[28px] block ">
                            Viết đánh giá
                        </button>
                    </div>
                </div>
                <div className="w-[400px]"></div>
            </div>
        </div>
    );
};

export default DetailProduct;
