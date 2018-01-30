import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import App from "./components/todoList";
import Add from "./components/addTodo";
import EditTodo from "./components/editTodo";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Simple todo</h1>
          </header>
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
        </div>
      </div>
    );
  }
}
