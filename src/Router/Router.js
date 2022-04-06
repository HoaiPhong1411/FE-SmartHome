import DetailProduct from "../container/Client/ClientDetailProduct/DetailProduct";
import ClientHome from "../container/Client/ClientHome/ClientHome";
import ClientProduct from "../container/Client/ClientProduct/ClientProduct";

export const ClientRoutes = [
    {
        index: true,
        element: <ClientHome />,
    },
    {
        index: true,
        path: "/product",
        element: <ClientProduct />,
    },
    {
        index: true,
        path: "/detail",
        element: <DetailProduct />,
    },
];
