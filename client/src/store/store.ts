import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import articleList from "./articleLists/articleList"
const store = configureStore({
    reducer:{
        userReducer,
        articleList
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;