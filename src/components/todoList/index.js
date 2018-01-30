import React, { Component } from "react";
import { connect } from "react-redux";

import { getTodos, startLoadingTodos } from "../../redux/actions";
import TodoList from "./todoList";

class TodoListLoader extends Component {
  //before loader page is loaded, we send requests to get all available units
  componentWillMount() {
    this.props.startLoadingTodos();
    this.props.getTodos();
  }

  render() {
    if (this.props.loadingTodos) {
      return <div>Loading...</div>;
    }
    return <TodoList history={this.props.history} />;
  }
}

//all below is just redux storage
const mapStateToProps = state => {
  const { todoReducer } = state;
  const { loadingTodos } = todoReducer;
  return { loadingTodos };
};

export default connect(mapStateToProps, { getTodos, startLoadingTodos })(
  TodoListLoader
);
