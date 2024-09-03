import {configureStore} from "@reduxjs/toolkit"
import { cartSlice } from "./cart-slice"


export const store = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})


export type AppDispatch = ReturnType<typeof store.dispatch>
export type RootState = typeof store.getState
