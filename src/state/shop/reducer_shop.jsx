const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SHOPDATA":
      return {
        ...state,
        shopData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
