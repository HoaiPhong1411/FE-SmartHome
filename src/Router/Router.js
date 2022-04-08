import DetailProduct from "../container/Client/ClientDetailProduct/DetailProduct";
import ClientCart from "../container/Client/ClientCart/ClientCart";
import ClientHome from "../container/Client/ClientHome/ClientHome";
import FeatureProduct from "../container/Client/ClientHome/Featureproduct/FeatureProduct";

export const ClientRoutes = [
    {
        index: true,
        element: <ClientHome />,
    },
    {
        index: true,
        path: "/product",
        element: <FeatureProduct />,
    },
    {
        index: true,
        path: "/detail",
        element: <DetailProduct />,
    },
    {
        index: true,
        path: "/cart",
        element: <ClientCart />,
    },
];
