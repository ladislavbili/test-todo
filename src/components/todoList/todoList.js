import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import "../../App.css";

class TodoList extends Component {
  render() {
    const todos = this.props.todos;

    return (
      <div>
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
                className="link"
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

export default connect(mapStateToProps, {})(TodoList);
