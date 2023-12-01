import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItemI } from "./types";
import { product } from "./data";

export interface CartState {
  items: CartItemI[];
}

const initialState: CartState = {
  items: [
    {
      id: product.id,
      productName: product.productName,
      productImage: product.images[0],
      price: product.price,
      quantity: 3,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemI>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex((i) => i.id === action.payload);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
