import * as ActionType from "../constant";

//action type

export const doAddCart = (payload) => ({
  type: ActionType.ADD_CART,
  payload
});

export const doGetCart = (payload) => ({
  type: ActionType.GET_CART,
  payload
});

export const doAddQty = (payload) => ({
  type: ActionType.ADD_QTY,
  payload
});

export const doMinusQty = (payload) => ({
  type: ActionType.MINUS_QTY,
  payload
});

export const doDeleteCart = (payload) => ({
  type: ActionType.DELETE_CART,
  payload
});
