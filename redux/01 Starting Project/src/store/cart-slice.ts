import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[]
}
const initialState: CartState= {
    items:[]
}

export const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action: PayloadAction<{id: string; title:string; price:number}>){
            const existingItem= state.items.find((item)=>item.id===action.payload.id)
            if(existingItem){
                existingItem.quantity++
            }else{
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart(state, action:PayloadAction<string>){
            const existingItem= state.items.find((item)=>item.id===action.payload)
            if(existingItem?.quantity===1){
                state.items = state.items.filter((item)=>item.id!==action.payload)
            }else if(existingItem?.quantity>1){
                existingItem.quantity--
            }
            
        }
    }
})

//they will be creating the action objects . So we can dispatch them 
export const {addToCart, removeFromCart} =cartSlice.actions