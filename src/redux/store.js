import { configureStore } from "@reduxjs/toolkit";
import productCartReducer from "./productCartSlice";
import { productReducer } from "../container/Client/ClientHome/Featureproduct/module/reducer";
export default configureStore({
    reducer: {
        productCart: productCartReducer,
        productReducer: productReducer,
    },
});
