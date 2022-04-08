import { clientApi } from "apis/api";
import {
    LIST_PRODUCT_REQUEST,
    LIST_PRODUCT_SUCCESS,
    LIST_PRODUCT_FAIL,
} from "./types";
const actListProductRequest = () => ({
    type: LIST_PRODUCT_REQUEST,
});
const actListProductSuccess = (data) => ({
    payload: data,
    type: LIST_PRODUCT_SUCCESS,
});
const actListProductFail = (error) => ({
    payload: error,
    type: LIST_PRODUCT_FAIL,
});
export const actListProducts = () => {
    return (dispatch) => {
        dispatch(actListProductRequest());
        clientApi
            .product()
            .then((res) => {
                dispatch(actListProductSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actListProductFail(err));
                console.log(err);
            });
    };
};
