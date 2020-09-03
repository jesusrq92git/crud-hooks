const initialState = {
  showLoading: false
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        showLoading: action.payload
      };
    default:
      return state;
  }
};