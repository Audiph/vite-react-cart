import { useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';
import {
  CLEAR_CART,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  INCREASE_AMOUNT,
  LOADING,
  REMOVE_ITEM,
} from './actions';

const url = `https://www.course-api.com/react-useReducer-cart-project`;

const defaultState = {
  loading: false,
  cart: new Map(),
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id } });
  };

  const fetchData = async () => {
    try {
      dispatch({ type: LOADING, payload: { loading: true } });
      const response = await fetch(url);
      const data = await response.json();
      const carts = new Map(data.map((item) => [item.id, item]));
      dispatch({
        type: DISPLAY_ITEMS,
        payload: { cart: carts },
      });
      dispatch({ type: LOADING, payload: { loading: false } });
    } catch (error) {
      dispatch({ type: LOADING, payload: { loading: false } });
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
