import { configureStore } from "@reduxjs/toolkit";
import productCartReducer from "./productCartSlice";
export default configureStore({
    reducer: {
        productCart: productCartReducer,
    }
})