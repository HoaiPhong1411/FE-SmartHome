import { BiSearch } from "react-icons/bi";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './ClientInputSearch.css';

const ListProSearch = [
{
    name: "Apple iPhone 13 Pro Max",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-17.png",
    price: "28,950,000 ₫",
},
{
    name: "Apple iPad Pro M1 12.9",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
    price: "24,790,000 ₫",
},
{
    name: "OPPO Reno7 Z 5G",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png",
    price: "10,490,000 ₫",
},
{
    name: "Nokia C20",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/17/image-removebg-preview-5.png",
    price: "2,240,000 ₫",
},
{
    name: "Samsung Galaxy Tab S6 Lite",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/27/image-removebg-preview%20(4)_637394050254302727.png",
    price: "9,090,000 ₫",
},
{
    name: "Laptop Apple M1 - MacBook Air 13",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/23/capture.PNG",
    price: "29,390,000 ₫",
},
{
    name: "Apple iPad Pro M1 12.9 dsad sa dasd asd asdsad asd sa sadas das dsa sa dsad asd asd asds as sad sadsa",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
    price: "24,790,000 ₫",
},
{
    name: "OPPO Reno7 Z 5G",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png",
    price: "10,490,000 ₫",
},
{
    name: "Nokia C20",
    image:
    "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/17/image-removebg-preview-5.png",
    price: "2,240,000 ₫",
},
];

const ClientInputSearch = () => {
    const dropDownRef = useRef(null);
    const [dropDown, setDropDown] = useState();
    const [showDropDown, setShowDropDown] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [valueNew, setValueNew] = useState(null);

    // get Element DropDown

    useEffect(() => {
        setDropDown(dropDownRef);
    }, []);

    const handleShowDropDown = () => {
        setShowDropDown(!showDropDown);
        handleDropDown();
      };
      // Handle DropDown
      const handleDropDown = () => {
        if (showDropDown) {
          dropDown.current.style.height = "25rem";
          dropDown.current.style.opacity = "1";
          dropDown.current.style.display = "block";
        } else {
          setTimeout(() => {
            dropDown.current.style.height = "0";
            dropDown.current.style.opacity = "0";
            dropDown.current.style.display = "none  ";
          }, 100);
        }
      };
    
      const handleChange = (e) => {
        // let newValue = inputValue + e.target.value;
        setInputValue(e.target.value);
      };
      useLayoutEffect(() => {
        const handleSearch = () => {
          const newvalue = [];
          ListProSearch.forEach((item, i) => {
            const stringConvert = item.name.toLowerCase();
            if (stringConvert.includes(inputValue.trim(), 0)) {
              return newvalue.push(item);
            }
          });
          setValueNew(newvalue);
        };
        handleSearch();
      }, [inputValue]);
    return ( 
        <>
            {/* input search */}
        <div className="px-10px dt:mt-3">
          <div
            className="relative flex items-center mx-auto dt:w-[60%] w-full h-[2.5rem] 
                        bg-[#fff] rounded-[1.5rem] shadow-shadow-primary"
          >
            {/* dropDown */}
            <div
              ref={dropDownRef}
              className="dropDown absolute hidden opacity-0 top-[2.8rem] rounded-bd8 shadow-shadow-primary w-[100%] h-0 overflow-y-scroll bg-[#fff] px-10px transition-all"
            >
              <ul>
                {inputValue == ""
                  ? ""
                  : valueNew?.map((item, i) => (
                      <Link to="/" key={i}>
                        <li className="flex flex-row justify-center items-center gap-2 py-10px border-b-2 border-b-[#ccc] hover:bg-[#f4f4f4]">
                          <div className="w-[3rem]">
                            <img src={item.image} className="w-full bg-cover" />
                          </div>
                          <div className="w-[90%]">
                            <p className="text-[1rem] font-semibold">
                              {item.name}
                            </p>
                            <strong className="text-color-red font-medium text-13px">
                              {item.price}
                            </strong>
                          </div>
                        </li>
                      </Link>
                    ))}
              </ul>
            </div>
            {/* End dropDown */}

            {/* input search */}
            <input
              onChange={(e) => handleChange(e)}
              onBlur={() => handleShowDropDown()}
              onFocus={() => handleShowDropDown()}
              type="text"
              value={inputValue}
              name="search"
              placeholder="Hôm nay bạn cần tìm gì"
              className="placeholder:text-[0.75rem] placeholder:font-normal 
                                placeholder:text-[#333] text-[0.75rem] font-medium 
                                text-[#333] ml-[0.5rem] w-[93%] p-[0.25rem] outline-none"
            ></input>
            {/* End input search */}

            {/* button search */}
            <button
              className="absolute top-[-0.5rem] right-[0.25rem] 
                                flex justify-center items-center w-[2.625rem] h-[2.625rem] 
                                rounded-[1rem] bg-gradient-to-b from-hover to-second 
                                shadow-shadow-primary text-[#fff] cursor-pointer
                                hover:translate-y-[0.3rem]"
            >
              <BiSearch className="text-[1.25rem]" />
            </button>
            {/* End button search */}
          </div>
        </div>
      {/* End input search */}
        </>
     );
}
 
export default ClientInputSearch;