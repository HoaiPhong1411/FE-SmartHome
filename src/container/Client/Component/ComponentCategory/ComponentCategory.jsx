import React, { useState } from "react";
import { Link } from "react-router-dom";

import ComponentCardProduct from "../ComponentCardProduct/ComponentCardProduct";
import ComponentBrand from "../ComponentBrand/ComponentBrand";

const ComponentCategory = (props) => {
  const { product, product2, nameCategory, linkCategory, cardCategory } = props;
  const [data, setData] = useState(product);
  const handleGetLink = (e) => {
    e.preventDefault();
    let nameCate = e.target.innerHTML;
    if (nameCate == "neopos") {
      setData(product);
    }
    if (nameCate == "category2") {
      setData(product2);
    } else {
      setData(product);
    }
  };
  return (
    <div id={nameCategory} className="dt:w-container dt:mx-auto my-4 ">
      <div className="flex flex-row gap-4 z-[-1000]">
        <ComponentBrand
          content={nameCategory}
          link={linkCategory}
          click={(e) => handleGetLink(e)}
        />
        <ComponentBrand
          style={cardCategory ? { display: "flex" } : { display: "none" }}
          content="category2"
          link="/product"
          click={(e) => handleGetLink(e)}
        />
        <ComponentBrand
          style={cardCategory ? { display: "flex" } : { display: "none" }}
          content="category3"
          link="/product"
          click={(e) => handleGetLink(e)}
        />
      </div>
      <div className=" mt-5 grid gap-4 dt:grid-cols-5 dt:grid-rows-2 dt:gap-4 ">
        {data?.map((item, index) => (
          <Link to="/product" key={index}>
            <ComponentCardProduct
              key={index}
              srcUrl={item.url}
              nameProduct={item.nameProduct}
              priceProduct={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentCategory;
