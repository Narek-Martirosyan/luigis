import axios from "./index";

export const registration = async (data) => {
    return await axios.post("userAuth/registration", data);
}

export const loginUser = async (data) => {
    return await axios.post("userAuth/login", data);
}

export const getUser = async () => {
    return await axios.get("userAuth/auth", {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    });
}