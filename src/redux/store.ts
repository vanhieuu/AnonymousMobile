import { configureStore } from "@reduxjs/toolkit";
import auth from './authSlice'
const store = configureStore({
    reducer:{
        auth
    }
});
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
