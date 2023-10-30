import {
  CLEAR_CART,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  INCREASE_AMOUNT,
  LOADING,
  REMOVE_ITEM,
  UPDATE_SUM,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      state.cart?.clear();
      return { ...state };

    case REMOVE_ITEM:
      state.cart?.delete(action.payload.id);
      return { ...state };

    case INCREASE_AMOUNT:
      const itemToIncrease = state.cart?.get(action.payload.id);

      itemToIncrease.amount++;

      return {
        ...state,
      };

    case DECREASE_AMOUNT:
      const itemToDecrease = state.cart?.get(action.payload.id);

      itemToDecrease.amount--;

      return {
        ...state,
      };

    case LOADING:
      console.log(action);
      // return { ...state, loading: action.payload.loading };
      return state;

    case DISPLAY_ITEMS:
      console.log(action);
      return { ...state, cart: action.payload.cart };

    case UPDATE_SUM:
      let newSum = 0;
      state.cart?.forEach((item) => {
        const { price, amount } = item;
        newSum += parseFloat(price * amount);
      });
      return { ...state, sum: Math.round(newSum * 100) / 100 };
    //
    default:
      return state;
  }
};
