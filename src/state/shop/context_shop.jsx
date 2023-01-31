import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import reducer from "./reducer_shop";
// import shopData from "./data/shopData";

const ShopContext = createContext();

const inititialState = {
  shopData: null,
};

const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititialState);

  const updateShopData = useCallback(
    (collectionsMap) => {
      return dispatch({
        type: "UPDATE_SHOPDATA",
        payload: collectionsMap,
      });
    },
    [dispatch]
  );

  return (
    <ShopContext.Provider
      value={{
        ...state,
        updateShopData,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = () => {
  return useContext(ShopContext);
};

export { ShopContext, ShopProvider, useShopContext };
