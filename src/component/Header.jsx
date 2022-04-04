import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/images/logo1.png";
import ClientInputSearch from "../container/Client/ClientInputSearch/ClientInputSearch";
import NavBar from "./NavBar";

const Header = () => {
  const [show, setShow] = useState(true);

  // Show menu
  const handleShow = (e) => {
    setShow(!show);
  };

  return (
    <>
      <div className="sticky top-0 mx-auto dt:w-container z-[1000] bg-[#f4f4f4]">
        {/* NavBar */}
        <div
          style={
            show
              ? { transform: "translateX(-100%)" }
              : { transform: "translateX(0)" }
          }
          className="absolute inset-0 bg-[#fff] z-50 h-[100vh] transition-transform dt:hidden"
        >
          {/* login */}
          <div
            className="flex flex-row justify-between items-center h-[15%] 
                      bg-second text-[#fff] px-10px"
          >
            <div className="flex flex-row justify-center items-center">
              <div>
                <FaRegUserCircle className="text-[3rem]" />
              </div>
              <div className="ml-[0.625rem]">
                <Link to="/login" className="text-[1rem] font-medium">
                  Đăng nhập
                </Link>
                <p className="text-13px font-light italic">
                  Đăng nhập để nhận nhiều ưu đãi
                </p>
              </div>
            </div>
            {/* Close menu */}
            <div>
              <IoCloseSharp
                className="text-[2.5rem] text-[#fff] cursor-pointer"
                onClick={(e) => handleShow(e)}
              />
            </div>
          </div>

          {/* menu */}
          <NavBar
            classLink="block w-full border-b-[1px] border-b-[#7c7c7c6f] text-18px text-second font-semibold pl-[1.25rem] leading-[4rem] hover:bg-[#f3f3f3]"
            onClickShow="true"
          />
        </div>
        {/* End Navbar */}

        <div
          className="flex flex-row w-full justify-between px-10px items-center 
                            border-b-[#64646433] dt:border-b-2"
        >
          {/* icon menu Mobile */}
          <div className="dt:hidden">
            <HiOutlineMenuAlt1
              className="text-[1.75rem]"
              onClick={(e) => handleShow(e)}
            />
          </div>
          {/* End icon menu */}

          {/* logo  */}
          <div>
            <Link to="/">
              <img
                src={logo}
                className="h-[4rem] translate-y-[-0.25rem] 
                                  cursor-pointer dt:w-[12rem] dt:h-[5rem] "
              />
            </Link>
          </div>
          {/* End logo  */}

          {/* icon cart */}
          <div className="flex flex-row justify-between items-center ">
            {/* Menu */}
            <div className="hidden dt:block">
              <NavBar
                classUl="flex flex-row mr-[3rem]"
                classLink="block px-[1rem] text-[1rem] text-second font-normal leading-[3rem] hover:border-b-primary border-b-2 border-b-[#f4f4f4] transition-all"
              />
            </div>
            {/* End Menu */}
            <div className="relative mr-[0.1rem] cursor-pointer">
              <AiOutlineShoppingCart className="text-[1.75rem] text-second hover:text-hover" />

              {/* Cart total */}
              <span
                className="inline-block absolute bottom-[-0.1rem] 
                                right-[-0.2rem] leading-[0.45rem] rounded-[0.25rem] 
                                text-center p-[0.3rem] bg-color-orange 
                                text-[#fff] text-[0.688rem] "
              >
                0
              </span>

              {/* End Cart total */}
            </div>
          </div>
          {/* End icon cart */}
        </div>

        {/* Input search */}
        <ClientInputSearch />
        {/* End input search */}
      </div>
    </>
  );
};

export default Header;
