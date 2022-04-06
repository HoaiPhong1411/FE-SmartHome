import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useState } from "react";

import "./ComponentCartProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../../redux/productCartSlice";

const ComponentCartProduct = (props) => {
  const { remove, id, quantityPro, srcImage, nameProduct, price } = props;
  const quantityCart = useSelector((state) => state.productCart.quantity);
  console.log(quantityCart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(quantityPro);
  const handleChange = (e) => {
    if (e.target.value > 0) {
      setQuantity(Number(e.target.value));
    } else {
      setQuantity(1);
    }
  };
  //   decrease increase
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  //  End  decrease increase

  const changeQuantity = () => {
    const updateQuantity = {
      id: id,
      quantity: quantity + 1,
      totalPrice: price,
    };
    dispatch(update(updateQuantity));
  };

  const totalPrice = (quantity, price) => {
    const total = new Intl.NumberFormat().format(quantity * price);
    return total;
  };
  return (
    <>
      <li
        key={id}
        className="w-full flex flex-col dt:flex-row gap-2 items-center justify-between mt-[1rem] bg-[#fff] p-10px mb-4 transition-all"
      >
        <div className="w-full dt:w-[50%] flex items-center">
          <img
            src={srcImage}
            alt=""
            className="w-[40%] dt:w-[30%] bg-cover p-10px"
          />
          <p className="text-18px font-medium dt:break-words">{nameProduct}</p>
        </div>
        <div className="flex justify-center items-center">
          <div
            onClick={() => {
              handleDecrease();
              changeQuantity();
            }}
            className="w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer border-[1px] border-[#aaaaaa]"
          >
            <FaMinus />
          </div>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              handleChange(e);
              changeQuantity();
            }}
            className="w-[4rem] h-[2rem] text-[#333] text-center outline-none border-[1px] border-[#aaaaaa]"
          />
          <div
            onClick={() => {
              handleIncrease();
              changeQuantity();
            }}
            className="w-[2rem] h-[2rem] flex justify-center cursor-pointer items-center border-[1px] border-[#aaaaaa]"
          >
            <GoPlus />
          </div>
        </div>
        <p className="text-18px font-medium text-color-red">
          {totalPrice(quantity, price)}đ
        </p>
        <div className="pr-[1rem]">
          <div>
            <IoCloseCircleSharp
              onClick={remove}
              className="text-[2.5rem] text-color-red cursor-pointer"
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default ComponentCartProduct;
