import React, { createContext, useCallback, useContext, useReducer } from "react";
import reducer from "./reducer";



const AppContext = createContext();

const inititialState = {
    user: null,
    hidden: true
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
    return (
        <AppContext.Provider value={{ ...state, setUser, toggleCartHidden}}>
            {children}
        </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };