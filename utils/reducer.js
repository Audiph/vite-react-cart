import {
  CLEAR_CART,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  INCREASE_AMOUNT,
  LOADING,
  REMOVE_ITEM,
  UPDATE_SUM,
} from './actions';
import { findItem } from './util';

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return state;

    case REMOVE_ITEM:
      console.log(action);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case INCREASE_AMOUNT:
      const result = findItem(state.cart, action.payload.id);
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === result.id) {
            item.amount = item.amount + 1;
          }
          return item;
        }),
      };

    case DECREASE_AMOUNT:
      return state;

    case LOADING:
      return { ...state, loading: action.payload.loading };

    case DISPLAY_ITEMS:
      return { ...state, cart: action.payload.cart };

    case UPDATE_SUM:
      let newSum = 0;
      state.cart.forEach((item) => {
        const { price, amount } = item;
        newSum += parseFloat(price * amount);
      });
      return { ...state, sum: Math.round(newSum * 100) / 100 };

    default:
      return state;
  }
};
