import { Link } from "react-router-dom";
import React, { Component } from "react";
import { editTodo, deleteTodo } from "../../redux/actions";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Select from "react-select";
import "react-select/dist/react-select.css";

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requester: this.props.todo.requester.id,
      assign: this.props.todo.assign.id,
      dropdownOpen: false
    };
  }

  save(e) {
    e.preventDefault();
    console.log(this.props.statuses);
    console.log(e.target.elements.status.value);
    const status = this.props.statuses.find(
      status => status.id == e.target.elements.status.value
    );
    this.props.editTodo(
      {
        title: e.target.elements.title.value,
        status,
        assign: this.props.assigned[
          this.props.assigned.findIndex(
            assign => assign.id === this.state.assign
          )
        ],
        requester: this.props.requesters[
          this.props.requesters.find(
            requester => requester.id == this.state.requester
          )
        ],
        assign: this.props.assigned[
          this.props.assigned.findIndex(
            assign => assign.id === this.state.assign
          )
        ]
      },
      this.props.todo.id
    );
    this.props.history.goBack();
  }

  delete() {
    this.props.deleteTodo(this.props.todo.id);
    this.props.history.goBack();
  }

  render() {
    return (
      <form
        onSubmit={this.save.bind(this)}
        style={{ maxWidth: 700, margin: "auto" }}
      >
        <h1>Edit todo</h1>
        <FormGroup>
          <Label for="Title">Title</Label>
          <Input
            name="title"
            placeholder="Title"
            defaultValue={this.props.todo.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Title">Status</Label>
          <Input
            name="status"
            placeholder="Status"
            type="select"
            defaultValue={this.props.todo.status.id}
          >
            {this.props.statuses.map(status => (
              <option value={status.id} key={status.id}>
                {status.title}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Requester</Label>
          <Select
            name="requester"
            placeholder="Requester"
            value={this.state.requester}
            options={this.props.requesters}
            onChange={e => this.setState({ requester: e.value })}
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Assigned</Label>
          <Select
            name="assigned"
            placeholder="assigned"
            value={this.state.assign}
            options={this.props.assigned}
            onChange={e => this.setState({ assign: e.value })}
          />
        </FormGroup>
        <Button style={{ marginRight: 20 }} color="primary" type="submit">
          Save
        </Button>
        <Button color="danger" onClick={this.delete.bind(this)}>
          Delete
        </Button>
      </form>
    );
  }
}

// All below is just redux storage
const mapStateToProps = ({
  todoReducer,
  statusReducer,
  tagReducer,
  requesterReducer,
  assignReducer
}) => {
  const { todo } = todoReducer;
  const { statuses } = statusReducer;
  const { tags } = tagReducer;
  const { assigned } = assignReducer;
  const { requesters } = requesterReducer;
  return { todo, statuses, tags, assigned, requesters };
};

export default connect(mapStateToProps, { editTodo, deleteTodo })(TodoEdit);
