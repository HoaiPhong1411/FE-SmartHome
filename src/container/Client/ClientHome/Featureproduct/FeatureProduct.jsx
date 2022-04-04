import React from "react";
import { Link } from "react-router-dom";

import logoHeading from "../../../../assets/images/heading.png";
import iphone from "../../../../assets/images/iphone.png";
import CartProduct from "../../../../component/CartProduct";


const product = [
  {
    nameProduct: "iPhone 12 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone 11 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone X Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone 13 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone 14 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone 15 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone 16 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone 16 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone 16 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
  {
    nameProduct: "iPhone 16 Pro max",
    price: "9,990, 000",
    url : 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg',
  },
];

const FeatureProduct = (props) => {
  const {srcUrl, nameProduct, priceProduct} = props
  return (
    <div className="dt:w-container dt:mx-auto my-4">
      <div className="relative w-[300px]">
        <div>
          <img src={logoHeading} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <p className="absolute top-1 uppercase text-13px  text-[#ffff]">
            NEOLOCK
          </p>
        </div>
      </div>
      <div className=" mt-5 grid gap-4 dt:grid-cols-5 dt:grid-rows-2 dt:gap-4  ">
    
          {
              product?.map((item, index) => (
                <Link to="/">
              <CartProduct key={index} srcUrl={item.url} nameProduct={item.nameProduct} priceProduct={item.price}  />
              </Link>
              ))
          }

      </div>
    </div>
  );
};

export default FeatureProduct;
