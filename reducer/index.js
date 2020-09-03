import { combineReducers, createStore } from "redux";
import { loadingReducer } from "./loading.reducer";

const allReducer = combineReducers({
  loadingReducer: loadingReducer
});

const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default myStore;
