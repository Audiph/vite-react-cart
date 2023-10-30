import {
  CLEAR_CART,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  INCREASE_AMOUNT,
  LOADING,
  REMOVE_ITEM,
} from './actions';

export const reducer = (state, action) => {
  const newCart = new Map(state.cart);
  const item = newCart.get(action.payload?.id);
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };

    case REMOVE_ITEM:
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };

    case INCREASE_AMOUNT:
      newCart.set(action.payload.id, { ...item, amount: item.amount + 1 });

      return {
        ...state,
        cart: newCart,
      };

    case DECREASE_AMOUNT:
      newCart.set(action.payload.id, { ...item, amount: item.amount - 1 });

      item.amount === 1 && newCart.delete(action.payload.id);

      return {
        ...state,
        cart: newCart,
      };

    case LOADING:
      return { ...state, loading: action.payload.loading };

    case DISPLAY_ITEMS:
      return { ...state, cart: action.payload.cart };

    default:
      return state;
  }
};
