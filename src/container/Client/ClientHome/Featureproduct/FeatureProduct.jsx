import ComponentBrand from "../../Component/ComponentBrand/ComponentBrand";
import ComponentCategory from "../../Component/ComponentCategory/ComponentCategory";

const product = [
    {
        nameProduct: "iPhone 12 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone 11 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone X Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone 13 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone 14 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone 15 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone 16 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone 16 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone 16 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
    {
        nameProduct: "iPhone 16 Pro max",
        price: "9,990, 000",
        url: "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    },
];
const product2 = [
    {
        nameProduct: "Apple iPhone 13 Pro Max",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-17.png",
        price: "28,950,000",
    },
    {
        nameProduct: "Apple iPad Pro M1 12.9",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
        price: "24,790,000",
    },
    {
        nameProduct: "OPPO Reno7 Z 5G",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png",
        price: "10,490,000",
    },
    {
        nameProduct: "Nokia C20",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/17/image-removebg-preview-5.png",
        price: "2,240,000",
    },
    {
        nameProduct: "Samsung Galaxy Tab S6 Lite",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/27/image-removebg-preview%20(4)_637394050254302727.png",
        price: "9,090,000",
    },
    {
        nameProduct: "Laptop Apple M1 - MacBook Air 13",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/23/capture.PNG",
        price: "29,390,000",
    },
    {
        nameProduct: "Apple iPad Pro M1 12.9 dsad saa asd asds as sad sadsa",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
        price: "24,790,000",
    },
    {
        nameProduct: "OPPO Reno7 Z 5G",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png",
        price: "10,490,000",
    },
    {
        nameProduct: "Nokia C20",
        url: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/17/image-removebg-preview-5.png",
        price: "2,240,000",
    },
];
const FeatureProduct = () => {
    const dispatch = useDispatch();
    const { dataProduct, loadding } = useSelector(
        (state) => state.productReducer
    );

    console.log(dataProduct);
    return (
        <>
            <ComponentCategory
                product={product}
                product2={product2}
                nameCategory="neopos"
                linkCategory="/product"
                cardCategory={true}
            />
        </>
    );
};

export default FeatureProduct;
