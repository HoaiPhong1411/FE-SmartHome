import logoHeading from "../../../../assets/images/heading.png";

const ComponentBrand = (props) => {
  const { content } = props;
  return (
    <>
      <div className="relative w-[300px]">
        <div>
          <img src={logoHeading} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <p className="absolute top-1 uppercase text-13px  text-[#ffff]">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default ComponentBrand;
