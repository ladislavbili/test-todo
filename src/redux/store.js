import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import todoReducer from "./reducers/todoReducer";
import statusReducer from "./reducers/statusReducer";
import tagReducer from "./reducers/tagReducer";

const reducers = combineReducers({
  todoReducer: todoReducer,
  statusReducer,
  tagReducer
});

const enhancers = compose(applyMiddleware(ReduxThunk));

export default () => createStore(reducers, {}, enhancers);
