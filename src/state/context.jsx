import React, { createContext, useCallback, useContext, useReducer } from "react";
import reducer from "./reducer";



const AppContext = createContext();

const inititialState = {
    user: null,
    hidden: true,
    cartItems: []
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, inititialState);

    const setUser = useCallback( (user) => {
        return dispatch({
            type: 'SET_USER',
            payload: {
                user: user
            }
        });
    },[dispatch]);

    const toggleCartHidden = () => {
        return dispatch({
            type: 'TOGGLE_CART_HIDDEN'
        })
    };

    const addItem = (item) => {
        return dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    };

    return (
        <AppContext.Provider value={{ ...state, setUser, toggleCartHidden, addItem}}>
            {children}
        </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };