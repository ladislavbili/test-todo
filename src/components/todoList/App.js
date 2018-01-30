import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Table } from "reactstrap";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const todos = this.props.todos;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple todo</h1>
        </header>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Task name</th>
              <th>Author</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr
                key={todo.id}
                onClick={() => this.props.history.push("edit/" + todo.id)}
              >
                <th scope="row">{todo.id}</th>
                <td> {todo.title}</td>
                <td>{todo.author}</td>
                <td>{todo.status.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button onClick={() => this.props.history.push("./add")}>
          Add new
        </button>
      </div>
    );
  }
}

//all below is just redux storage
const mapStateToProps = ({ todoReducer }) => {
  const { todos } = todoReducer;
  return { todos };
};

export default connect(mapStateToProps, {})(App);
