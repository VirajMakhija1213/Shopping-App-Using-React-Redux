import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      return []; // Reset cart to an empty array
    }
  }
});

export const { add, remove, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
