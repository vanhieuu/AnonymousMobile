import { configureStore } from "@reduxjs/toolkit";
import auth from './authSlice'
import register from './authRegisterSlice'
import news from './newSlice'
const store = configureStore({
    reducer:{
        auth,
        register,
        news
    }
});
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
