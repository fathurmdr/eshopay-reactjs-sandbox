import { createStore } from "redux";
import cartReducer from "../reducers/cartReducer";

//create store
const store = createStore(cartReducer);

export default store;
