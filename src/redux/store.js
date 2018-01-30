import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import reducer1 from "./reducers/reducer1";
import statusReducer from "./reducers/statusReducer";

const reducers = combineReducers({
  todoReducer: reducer1,
  statusReducer
});

const enhancers = compose(applyMiddleware(ReduxThunk));

export default () => createStore(reducers, {}, enhancers);
