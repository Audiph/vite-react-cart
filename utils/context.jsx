import { useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';
import { DISPLAY_ITEMS, LOADING } from './actions';

const defaultState = {
  loading: false,
  cart: null,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: LOADING, payload: { loading: true } });
        const response = await fetch(
          `https://www.course-api.com/react-useReducer-cart-project`
        );
        const data = await response.json();
        dispatch({
          type: DISPLAY_ITEMS,
          payload: {
            cart: new Map(
              data.map((item) => {
                return [item.id, item];
              })
            ),
          },
        });
        dispatch({ type: LOADING, payload: { loading: false } });
      } catch (error) {
        dispatch({ type: LOADING, payload: { loading: false } });
        throw new Error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
