import {
  ADD_CART,
  ADD_QTY,
  DELETE_CART,
  GET_CART,
  MINUS_QTY
} from "../constant";

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

const listOfCategory = ["Fashion", "Komputer", "Handphone"];

const listOfSubCategory = [
  { subname: "Baju Muslim", category: "Fashion" },
  { subname: "Kaos", category: "Fashion" },
  { subname: "Tablet", category: "Handphone" },
  { subname: "Casing", category: "Handphone" },
  { subname: "Laptop", category: "Komputer" },
  { subname: "Memory DDR3", category: "Komputer" }
];

const INIT_STATE = {
  carts: [...listOfCart],
  totalHarga: [...listOfCart].reduce((sum, el) => sum + el.subTotal, 0),
  totalQty: [...listOfCart].reduce((sum, el) => sum + el.qty, 0),
  category: [...listOfCategory],
  subCategory: [...listOfSubCategory],
  productChecked: []
};

const cartReducer = (state = INIT_STATE, action) => {
  // select * from carts
  switch (action.type) {
    case GET_CART:
      return { ...state };
    case ADD_CART:
      return applyAddCart(state, action);
    case ADD_QTY:
      return applyAddQty(state, action);
    case MINUS_QTY:
      return applyMinusQty(state, action);
    case DELETE_CART:
      return applyDeleteCart(state, action);
    default:
      return state;
  }
};

//action reducer
const applyAddCart = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    carts: [...state.carts, payload],
    totalHarga: [...state.carts, payload].reduce(
      (sum, el) => sum + el.subTotal,
      0
    ),
    totalQty: [...state.carts, payload].reduce((sum, el) => sum + el.qty, 0)
  };
};

const applyAddQty = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    carts: [
      ...state.carts.map((cart) => {
        if (payload.id === cart.prodId) {
          cart.qty = cart.qty + 1;
          cart.subTotal = cart.price * cart.qty;
          return cart;
        } else {
          return cart;
        }
      })
    ],
    totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
    totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0)
  };
};

const applyMinusQty = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    carts: [
      ...state.carts.map((cart) => {
        if (payload.id === cart.prodId) {
          cart.qty = cart.qty - 1;
          cart.subTotal = cart.price * cart.qty;
          return cart;
        } else {
          return cart;
        }
      })
    ],
    totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
    totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0)
  };
};

const applyDeleteCart = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    carts: [...state.carts.filter((el) => el.prodId !== payload.id)],
    totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
    totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0)
  };
};

export default cartReducer;
