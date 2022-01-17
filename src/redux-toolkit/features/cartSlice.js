import { createSlice } from "@reduxjs/toolkit";

const listOfCart = [
  {
    prodId: 1,
    name: "Dell",
    price: 1500,
    qty: 1,
    subTotal: 5500,
    category: "Komputer",
    subCategory: ""
  },
  {
    prodId: 2,
    name: "T-Shirt",
    price: 500,
    qty: 1,
    subTotal: 500,
    category: "Fashion",
    subCategory: ""
  },
  {
    prodId: 3,
    name: "Samsung",
    price: 3500,
    qty: 1,
    subTotal: 3500,
    category: "Handphone",
    subCategory: ""
  }
];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [...listOfCart],
    totalHarga: 0,
    totalQty: 0
  },

  reducers: {
    doGetCart: (state) => state,
    doAddQty: (state, action) => {
      const carts = [
        ...state.carts.map((cart) => {
          if (action.payload.id === cart.prodId) {
            cart.qty = cart.qty + 1;
            cart.subTotal = cart.price * cart.qty;
            return cart;
          } else {
            return cart;
          }
        })
      ];
      const totalHarga = carts.reduce((total, el) => total + el.subTotal, 0);
      const totalQty = carts.reduce((total, el) => total + el.qty, 0);
      state.carts = carts;
      state.totalHarga = totalHarga;
      state.totalQty = totalQty;
    },
    doMinusQty: (state, action) => {
      const carts = [
        ...state.carts.map((cart) => {
          if (action.payload.id === cart.prodId) {
            cart.qty = cart.qty + 1;
            cart.subTotal = cart.price * cart.qty;
            return cart;
          } else {
            return cart;
          }
        })
      ];
      const totalHarga = carts.reduce((total, el) => total + el.subTotal, 0);
      const totalQty = carts.reduce((total, el) => total + el.qty, 0);
      state.carts = carts;
      state.totalHarga = totalHarga;
      state.totalQty = totalQty;
    },
    doDeleteCart: (state) => state,
    doAddCart: (state) => state,
  }
});

export const { doGetCart, doAddQty, doMinusQty, doDeleteCart, doAddCart } = cartSlice.actions;
export default cartSlice.reducer;
