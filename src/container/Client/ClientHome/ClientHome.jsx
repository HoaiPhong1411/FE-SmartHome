import ClientSlideBanner from "../ClientSlideBanner/ClientSliderBanner";
import ClientSlideProduct from "../ClientSlideProduct/ClientSlideProduct";
import ClientInputSearch from "../ClientInputSearch/ClientInputSearch";

const ClientHome = () => {
  return (
    <>
      {/* Input search */}
      <ClientInputSearch />
      {/* End input search */}
      <ClientSlideBanner />
      <ClientSlideProduct />
    </>
  );
};

export default ClientHome;
