import FeatureProduct from "./Featureproduct/FeatureProduct";
import ClientSlideBanner from "../ClientSlideBanner/ClientSliderBanner";
import ClientSlideProduct from "../ClientSlideProduct/ClientSlideProduct";

const ClientHome = () => {
    return (
        <>
            <ClientSlideBanner />
            <ClientSlideProduct />
            <FeatureProduct />
        </>
    );
};

export default ClientHome;
