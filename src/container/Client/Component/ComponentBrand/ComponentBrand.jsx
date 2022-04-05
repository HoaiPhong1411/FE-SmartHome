import { Link } from "react-router-dom";

import logoHeading from "../../../../assets/images/heading.png";

const ComponentBrand = (props) => {
  const { style, content, link, click } = props;
  return (
    <>
      <div
        style={style}
        className="w-[60%] dt:w-[20%] tl:w-[45%] h-[2rem] flex z-0"
      >
        <div className="w-[25%] bg-hover h-full before:content-[''] relative before:border-t-[2rem] before:border-l-[2rem] before:border-t-second before:border-l-hover before:absolute before:right-0"></div>
        <Link
          to={link}
          onClick={click}
          className="w-[75%] bg-second h-full text-[0.9rem] text-[#fff] font-medium hover:text-hover uppercase text-center leading-[2rem]"
        >
          <p>{content}</p>
        </Link>
      </div>
    </>
  );
};

export default ComponentBrand;
