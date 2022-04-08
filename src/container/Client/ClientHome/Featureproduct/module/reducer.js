import {
    LIST_PRODUCT_REQUEST,
    LIST_PRODUCT_SUCCESS,
    LIST_PRODUCT_FAIL,
} from "./types";

const initialState = {
    dataProduct: [],
    loadding: false,
    error: null,
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LIST_PRODUCT_REQUEST:
            return { ...state, loadding: true };
        case LIST_PRODUCT_SUCCESS:
            return { ...state, loadding: false, dataProduct: payload };
        case LIST_PRODUCT_FAIL:
            return {
                ...state,
                loadding: false,
                dataProduct: null,
                error: payload,
            };

        default:
            return state;
    }
};
