import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import errorReducer from '../features/errors/errorSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        error: errorReducer
    },
})