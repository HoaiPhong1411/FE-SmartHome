import axios from "axios";

export const callApi = (url, method = "GET", data = null) => {
    return axios({
        url,
        method: "GET",
        data,
        headers: {
            Accept: "application/json, text/plain, */*",
        },
    });
};
