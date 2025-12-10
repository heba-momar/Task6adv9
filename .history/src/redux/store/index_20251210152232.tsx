
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './../slice/index';
import modeReducer from './../slice/darkmode';const store = configureStore({
    reducer: {
        blogs: blogReducer, 
        mode: modeReducer,
    },});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;