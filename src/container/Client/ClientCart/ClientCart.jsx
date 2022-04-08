import ComponentBrand from "../Component/ComponentBrand/ComponentBrand";
import ComponentCartProduct from "../Component/ComponentCartProduct/ComponentCartProduct";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const listPro = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro Max",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-17.png",
    price: 8950000,
  },
  {
    id: 2,
    name: "Apple iPad Pro M1 12.9",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
    price: 4790000,
  },
  {
    id: 3,
    name: "OPPO Reno7 Z 5G",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png",
    price: 10490000,
  },
  {
    id: 4,
    name: "Nokia C20",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/17/image-removebg-preview-5.png",
    price: 2240000,
  },
  {
    id: 5,
    name: "Samsung Galaxy Tab S6 Lite",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/27/image-removebg-preview%20(4)_637394050254302727.png",
    price: "9090000",
  },
  {
    id: 6,
    name: "Laptop Apple M1 - MacBook Air 13",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/23/capture.PNG",
    price: 9390000,
  },
  {
    id: 7,
    name: "Apple iPad Pro M1 12.9 dsad saa asd asds as sad sadsa",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
    price: 4790000,
  },
  {
    id: 8,
    name: "OPPO Reno7 Z 5G",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png",
    price: 20490000,
  },
  {
    id: 9,
    name: "Nokia C20",
    quantity: 1,
    image:
      "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/17/image-removebg-preview-5.png",
    price: 22240000,
  },
];

const ClientCart = () => {
  const [list, setList] = useState(listPro);

  const handleDelete = (list, id) => {
    const newData = list.filter((product) => product.id !== id);
    setList(newData);
    console.log(id);
  };
  return (
    <>
      <div className="w-full dt:w-container mx-auto mt-[1rem]">
        <ComponentBrand content="Cart" link="/cart" />
        <div className="hidden w-full dt:flex flex-row justify-between bg-[#fff] text-[1rem] font-medium rounded-bd4 shadow-shadow-primary py-10px px-[2rem] mt-[1rem]">
          <div className="w-[50%]">Product</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Action</div>
        </div>
        <form type="submit">
          <ul>
            {list == "" ? (
              <li className="w-full flex mb-[10.29rem] flex-col gap-2 items-center text-[#888] text-[1rem] italic font-medium justify-center mt-[1rem] bg-[#fff] p-10px">
                <div className="flex flex-row items-center justify-center">
                  <MdRemoveShoppingCart />
                  <p>Giỏ hàng trống</p>
                </div>

                <Link
                  to="/"
                  className="block px-[3rem] py-[0.025rem] rounded-[0.5rem] leading-8 text-center text-13px font-medium text-primary border-2 border-[#333]"
                >
                  Về trang chủ
                </Link>
              </li>
            ) : (
              list.map((item) => (
                <ComponentCartProduct
                  remove={() => handleDelete(list, item.id)}
                  id={item.id}
                  quantityPro={item.quantity}
                  srcImage={item.image}
                  nameProduct={item.name}
                  price={item.price}
                />
              ))
            )}
            {list == "" ? (
              <></>
            ) : (
              <li className="w-full flex mb-[10.29rem] flex-col gap-2 items-center text-[#888] text-[1rem] italic font-medium justify-center mt-[1rem] bg-[#fff] p-10px">
                <p>Total:đ</p>
                <button
                  type="submit"
                  className="px-[3.5rem] py-[0.55rem] tl:px-[1.5rem] tl:py-[0.35rem] text-[#fff] text-[0.9rem] font-semibold bg-gradient-to-b from-[#ff1c1c] to-[#710000] rounded-[0.25rem] shadow-shadow-primary"
                >
                  Buy
                </button>
              </li>
            )}
          </ul>
        </form>
      </div>
    </>
  );
};

export default ClientCart;
