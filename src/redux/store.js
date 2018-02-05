import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todoReducer from "./reducers/todoReducer";
import statusReducer from "./reducers/statusReducer";
import tagReducer from "./reducers/tagReducer";
import assignReducer from "./reducers/assignReducer";
import requesterReducer from "./reducers/requesterReducer";

const reducers = combineReducers({
  todoReducer: todoReducer,
  statusReducer,
  tagReducer,
  assignReducer,
  requesterReducer
});

const enhancers = composeWithDevTools(applyMiddleware(ReduxThunk));

export default () => createStore(reducers, {}, enhancers);
