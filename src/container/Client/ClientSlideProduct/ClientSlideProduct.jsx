import ComponentBrand from "../Component/ComponentBrand/ComponentBrand";
import ComponentSlide from "../Component/ComponentSlide/ComponentSlide";

const ListPro = [
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
    name: "Apple iPad Pro M1 12.9 dsad saa asd asds as sad sadsa",
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

const ClientSlideProduct = () => {
  return (
    <>
      <div className="w-full dt:w-container mx-auto mt-[1.25rem]">
        <ComponentBrand content="featured product" link="/product" />
      </div>
      <ComponentSlide data={ListPro} button={false} />
    </>
  );
};

export default ClientSlideProduct;
