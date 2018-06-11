import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./Navigation";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';

import { Provider } from "react-redux";
import createStore from "./redux/store";
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Navigation />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
