import React from "react";
import { Link } from "react-router-dom";
import { GiRotaryPhone } from "react-icons/gi";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillGoogleSquare,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import logo from "../assets/images/logo-bct.png";
import logo2 from "../assets/images/logo2.png";

const nav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Product",
    path: "/product",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Login",
    path: "/login",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-auto bg-primary pt-[20px] text-[#ffff] text-13px tl:text-13px pt-2 pb-4  px-[10px]  ">
      <div className="flex justify-around  ">
        <div>
          {nav.map((item, index) => {
            return (
              <ul key={index}>
                <Link to={item.path} className="uppercase hover:text-hover">
                  <li className="transition-all text-white">{item.display}</li>
                </Link>
              </ul>
            );
          })}
        </div>
        {/* Liên hệ */}
        <div className="flex justify-center gap-2 w-[60%]">
          <GiRotaryPhone className="text-18px" />
          <div className="flex flex-col">
            <span>Hotline : 0971 782 741 </span>
            <span>Phone : 0971 782 741</span>
            <div className="flex text-[16px] dt:text-[26px] gap-2 mt-2">
              <AiFillFacebook />
              <AiFillTwitterSquare />
              <AiFillYoutube />
              <AiFillGoogleSquare />
            </div>
          </div>
        </div>
        {/* end liên hệ */}
        {/* image */}
        <div className="w-[10%] flex flex-col gap-3">
          <img src={logo} alt="" className="w-full cover" />
          <img src={logo2} alt="" />
        </div>
        {/* end image */}
      </div>
      {/* coppy */}
      <div className="flex items-center text-center justify-center">
        <AiOutlineCopyrightCircle />
        <p className=" font-semibold">2022 CÔNG TY CÔNG NGHỆ SMARTHOME</p>
      </div>
      <div className="flex justify-center font-semibold">
        <p className="text-center">Design By BTS.</p>
      </div>
      {/* coppy */}
    </div>
  );
};

export default Footer;
