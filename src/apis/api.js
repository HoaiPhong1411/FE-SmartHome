import { callApi } from "../config/configApi";
export const clientApi = {
    product() {
        return callApi("http://127.0.0.1:8000/api/products");
    },
    category() {
        return callApi("http://127.0.0.1:8000/api/category");
    },
    // login() {
    //     return callApi("http://127.0.0.1:8000/api/auth/login");
    // },
};
