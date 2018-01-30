import { Link } from "react-router-dom";
import React, { Component } from "react";
import { editTodo } from "../../redux/actions";
import { connect } from "react-redux";

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    // we create state according to already recieved informations
    this.state = {
      title: this.props.todo.title,
      status: this.props.todo.status.id,
      author: this.props.todo.author
    };
  }

  //gets all data from the state and sends it to the API
  submit() {
    this.props.editTodo(
      {
        title: this.state.title,
        status: this.props.statuses[
          this.props.statuses.findIndex(
            status => status.id === this.state.status
          )
        ],
        author: this.state.author
      },
      this.props.todo.id
    );
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <h1>Edit todo</h1>
        <input
          placeholder="Title"
          value={this.state.title}
          onChange={e => this.setState({ title: e.target.value })}
        />
        <input
          placeholder="Author"
          value={this.state.author}
          onChange={e => this.setState({ author: e.target.value })}
        />
        <select
          placeholder="Status"
          value={this.state.status}
          onChange={e => this.setState({ status: parseInt(e.target.value) })}
        >
          {this.props.statuses.map(status => (
            <option value={status.id} key={status.id}>
              {status.title}
            </option>
          ))}
        </select>
        <button onClick={this.submit.bind(this)}>Save</button>
      </div>
    );
  }
}

// All below is just redux storage
const mapStateToProps = ({ todoReducer, statusReducer }) => {
  const { todo } = todoReducer;
  const { statuses } = statusReducer;
  return { todo, statuses };
};

export default connect(mapStateToProps, { editTodo })(TodoEdit);
