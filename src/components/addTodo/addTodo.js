import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { addTodo } from "../../redux/actions";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      status: this.props.statuses[0].id
    };
  }
  submit() {
    this.props.addTodo({
      title: this.state.name,
      status: this.props.statuses[
        this.props.statuses.findIndex(status => status.id === this.state.status)
      ],
      author: this.state.author
    });
    this.props.history.goBack();
  }
  render() {
    return (
      <div style={{ maxWidth: 700, margin: "auto" }}>
        <h1>Add todo</h1>
        <FormGroup>
          <Input
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Author"
            value={this.state.author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
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

        <button onClick={this.submit.bind(this)}>Save</button>
      </div>
    );
  }
}
//all below is just redux storage
const mapStateToProps = ({ statusReducer }) => {
  const { statuses } = statusReducer;
  return { statuses };
};

export default connect(mapStateToProps, { addTodo })(Add);
