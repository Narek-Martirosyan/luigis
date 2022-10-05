import { createSlice } from '@reduxjs/toolkit'

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        data: [],
        loginData: ""
    },
    reducers: {
        changeErrorData: (state, { payload }) => {
            if (payload[0]?.param) {
                state.data = payload;
            } else {
                state.loginData = payload;
            }
        }
    },
})

export const { changeErrorData } = errorSlice.actions;

export default errorSlice.reducer;