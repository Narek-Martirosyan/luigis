import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {},
        token: "",
        cart: [],
        cartCounter: true,
        userCart: [],
        productPrice: ""
    },
    reducers: {
        changeUserData: (state, { payload }) => {
            state.data = payload?.user;
            state.token = payload?.token;
            state.cart = payload?.user?.userCart.map(item => item._id);
            state.userCart = payload?.user?.userCart;
            localStorage.setItem("token", "Bearer " + payload?.token);
        },
        changeCartCounter: (state, { payload }) => {
            state.cartCounter = payload;
        },
        changeUserCart: (state, { payload }) => {
            state.userCart.forEach(product => {
                if (product?._id === payload.id) {
                    product.quantity = +payload.quantity;
                }
            });
        },
        changeProductPrice: (state, { payload }) => {
            state.productPrice = payload;
        },
        changeCart: (state, {payload}) => {
            state.cart = payload;
        }
    },
})

export const { changeUserData, changeCartCounter, changeCart, changeUserCart, changeProductPrice } = userSlice.actions

export default userSlice.reducer