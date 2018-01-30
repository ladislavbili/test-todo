import { Link } from "react-router-dom";
import React, { Component } from "react";
import { editTodo, deleteTodo } from "../../redux/actions";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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

  delete() {
    console.log(this.props.todo.id);
    this.props.deleteTodo(this.props.todo.id);
    this.props.history.goBack();
  }

  render() {
    return (
      <div style={{ maxWidth: 700, margin: "auto" }}>
        <h1>Edit todo</h1>
        <FormGroup>
          <Label for="Title">Title</Label>
          <Input
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Title">Author</Label>
          <Input
            placeholder="Author"
            value={this.state.author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Title">Status</Label>
          <Input
            placeholder="Status"
            type="select"
            value={this.state.status}
            onChange={e => this.setState({ status: parseInt(e.target.value) })}
          >
            {this.props.statuses.map(status => (
              <option value={status.id} key={status.id}>
                {status.title}
              </option>
            ))}
          </Input>
        </FormGroup>
        <Button
          style={{ marginRight: 20 }}
          color="primary"
          onClick={this.submit.bind(this)}
        >
          Save
        </Button>
        <Button color="danger" onClick={this.delete.bind(this)}>
          Delete
        </Button>
      </div>
    );
  }
}

// All below is just redux storage
const mapStateToProps = ({ todoReducer, statusReducer, tagReducer }) => {
  const { todo } = todoReducer;
  const { statuses } = statusReducer;
  const { tags } = tagReducer;
  console.log(tags);
  return { todo, statuses, tags };
};

export default connect(mapStateToProps, { editTodo, deleteTodo })(TodoEdit);
