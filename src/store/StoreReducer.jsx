export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "IS_SHOW":
      return {
        ...state,
        isShow: action.payload,
      };
    case "IS_SUCCESS":
      return {
        ...state,
        isSuccess: action.payload,
      };

    default:
      return state;
  }
};
