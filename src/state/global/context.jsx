import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "./reducer";
import sections from "../data/section";
// import shopData from "./data/shopData";

const AppContext = createContext();

const inititialState = {
  user: null,
  hidden: true,
  cartItems: [],
  sections: sections,
};

const AppProvider = ({ children }) => {
  useEffect(() => {
    const data = window.localStorage.getItem("Crown_X_CartItems");
    if (data) {
      inititialState.cartItems = JSON.parse(data);
    }
    // console.log('Fetching data from local storage')
  }, []);

  const [state, dispatch] = useReducer(reducer, inititialState);

  useEffect(() => {
    window.localStorage.setItem(
      "Crown_X_CartItems",
      JSON.stringify(state.cartItems)
    );
    // console.log('Updating data to local storage')
  }, [state.cartItems]);

  const setUser = useCallback(
    (user) => {
      return dispatch({
        type: "SET_USER",
        payload: {
          user: user,
        },
      });
    },
    [dispatch]
  );

  const toggleCartHidden = () => {
    return dispatch({
      type: "TOGGLE_CART_HIDDEN",
    });
  };

  const addItem = (item) => {
    return dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItem = (item) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: item,
    });
  };

  const clearItemFromCart = (item) => {
    return dispatch({
      type: "CLEAR_ITEM_FROM_CART",
      payload: item,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setUser,
        toggleCartHidden,
        addItem,
        removeItem,
        clearItemFromCart,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
