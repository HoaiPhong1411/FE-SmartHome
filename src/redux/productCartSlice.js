import { createSlice } from "@reduxjs/toolkit";

export const productCartSlice = createSlice({
    name: "productCart",
    initialState: 
        {
            id: 1,
            quantity: 4,
            totalPrice:2000
        }
    ,
    reducers: {
        update:(state, action)=> {
            state.id = action.payload.id;
            state.quantity = action.payload.quantity;
            state.totalPrice = action.payload.quantity;
        }
    }
})

export const {update} = productCartSlice.actions;
export default productCartSlice.reducer;