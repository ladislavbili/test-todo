import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { addTodo } from "../../redux/actions";

class Add extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      name: "",
      author: "",
      status: this.props.statuses[0].id,
      requester: "",
      assign: "",
      dropdownOpen: false
    };
  }
  submit() {
    this.props.addTodo({
      title: this.state.name,
      status: this.props.statuses[
        this.props.statuses.findIndex(status => status.id === this.state.status)
      ],
      assign: this.props.assigned[
        this.props.assigned.findIndex(assign => assign.id === this.state.assign)
      ],
      requester: this.props.requesters[
        this.props.requesters.find(
          requester => requester.id == this.state.requester
        )
      ],
      author: this.state.author
    });
    this.props.history.goBack();
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div style={{ maxWidth: 700, margin: "auto" }}>
        <h1>Add todo</h1>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Task name</Label>
          <Input
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Description</Label>
          <Input
            placeholder="Description"
            value={this.state.author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Status</Label>
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

        <FormGroup style={{ textAlign: "left" }}>
          <Label>Requester</Label>
          <Select
            placeholder="Requester"
            value={this.state.requester}
            options={this.props.requesters}
            onChange={e => this.setState({ requester: e.value })}
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Assigned</Label>
          <Select
            placeholder="Assigned"
            value={this.state.assign}
            options={this.props.assigned}
            onChange={e => this.setState({ assign: e.value })}
          />
        </FormGroup>
        {/*
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Due date</Label>
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Label</Label>
          <ListGroup>
            {this.props.tags.map(tag => (
              <ListGroupItem
                style={{ backgroundColor: tag.color, color: "white" }}
                key={tag.id}
              >
                {tag.title}
              </ListGroupItem>
            ))}
          </ListGroup>
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              {this.props.tags.map(tag => (
                <DropdownItem
                  style={{ backgroundColor: tag.color, color: "white" }}
                  key={tag.id}
                >
                  {tag.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
            */}

        <button onClick={this.submit.bind(this)}>Save</button>
      </div>
    );
  }
}
//all below is just redux storage
const mapStateToProps = ({
  statusReducer,
  tagReducer,
  requesterReducer,
  assignReducer
}) => {
  const { statuses } = statusReducer;
  const { tags } = tagReducer;
  const { assigned } = assignReducer;
  const { requesters } = requesterReducer;

  return { statuses, tags, assigned, requesters };
};

export default connect(mapStateToProps, { addTodo })(Add);
