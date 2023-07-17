import { legacy_createStore as createStore, combineReducers,applyMiddleware } from "redux";

// combineReducers 合并 reducer
import numReducer from "../store/numStore/reducer";
import ArrReducer from "../store/ArrStore/reducer";

// 引入 reduxThunk
import reduxThunk from "redux-thunk"

const reducers = combineReducers({
  numReducer,
  ArrReducer,
});

const store = createStore(reducers,applyMiddleware(reduxThunk));

export default store;
