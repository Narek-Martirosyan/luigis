import axios from "./index";

export const getProducts = async () => {
    return await axios.get("product");
}

export const addToCart = async (id) => {
    return await axios.post("userAuth/addCart", {
        headers: {
            authorization: localStorage.getItem("token")
        },
        cartId: id
    })
}

export const removeCard = async (id) => {
    return await axios.post("userAuth/removeCart", {
        headers: {
            authorization: localStorage.getItem("token")
        },
        cartId: id
    });
}