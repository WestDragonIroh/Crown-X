const reducer = (state, action) => {
    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.user
            };

        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            };

        default:
            return state;
    }
};

export default reducer