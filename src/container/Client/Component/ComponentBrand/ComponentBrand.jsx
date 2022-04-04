import { Link } from "react-router-dom";

import logoHeading from "../../../../assets/images/heading.png";

const ComponentBrand = (props) => {
  const { content, link } = props;
  return (
    <>
      <div className="relative w-[320px]">
        <div>
          <img src={logoHeading} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={link}
            className="absolute top-[0.125rem] uppercase text-[1rem] font-semibold text-[#ffff] hover:text-hover"
          >
            {content}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ComponentBrand;
