import {
  CLEAR_CART,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  INCREASE_AMOUNT,
  LOADING,
  REMOVE_ITEM,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return;

    case REMOVE_ITEM:
      return;

    case INCREASE_AMOUNT:
      return;

    case DECREASE_AMOUNT:
      return;

    case LOADING:
      return { ...state, loading: action.payload.loading };

    case DISPLAY_ITEMS:
      return { ...state, cart: action.payload.cart };

    default:
      return state;
  }
};
