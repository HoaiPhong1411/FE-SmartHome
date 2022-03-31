import ClientHome from "../container/Client/ClientHome/ClientHome";
import ClientProduct from "../container/Client/ClientProduct/ClientProduct";

export const ClientRoutes = [
    {
        index: true,
        element: <ClientHome/>
    },
    {
        index: true,
        element: <ClientProduct/>
    }
]