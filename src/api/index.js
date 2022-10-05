import axios from "axios";
import store from "../app/store";
import { changeErrorData } from "../features/errors/errorSlice";

const instance = axios.create({
    baseURL: "https://rae-pizza-server.herokuapp.com/"
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    console.log(error);

    if (error.response.status === 400) {
        if (error?.response?.data?.errors?.errors) {
            store.dispatch(changeErrorData(error?.response?.data?.errors?.errors));
        } else {
            store.dispatch(changeErrorData(error?.response?.data));
        }
    }

    throw error;
});

export default instance;