import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import App from "./components/todoList";
import Add from "./components/addTodo";
import EditTodo from "./components/editTodo";

export default class Navigation extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact home path="/" component={App} />
          </Switch>
          <Switch>
            <Route exact path="/add" component={Add} />
          </Switch>
          <Switch>
            <Route exact path="/edit/:id" component={EditTodo} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
