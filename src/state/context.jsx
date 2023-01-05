import React, { createContext, useCallback, useContext, useReducer } from "react";
import reducer from "./reducer";



const AppContext = createContext();

const inititialState = {
    user: null
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

    return (
        <AppContext.Provider value={{ ...state, setUser}}>
            {children}
        </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };