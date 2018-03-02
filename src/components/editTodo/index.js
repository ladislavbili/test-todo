import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getTodo,
  startLoadingTodo,
  getStatuses,
  startLoadingStatuses,
  getTags,
  startLoadingTags,
  getAssigned,
  startLoadingAssigned,
  getRequesters,
  startLoadingRequesters
} from "../../redux/actions";
import TodoEdit from "./todoEdit";

class TodoEditLoader extends Component {
  componentWillMount() {
    this.props.startLoadingTodo(); // first it sets, that unit hasnt been loaded
    this.props.startLoadingStatuses(); // first it sets, that unit hasnt been loaded
    this.props.getTodo(parseInt(this.props.match.params.id, 10)); //send request for download and storing of the units data
    this.props.getStatuses();
    this.props.getTags();
    this.props.getRequesters();
    this.props.getAssigned();
  }

  render() {
    if (!this.props.loadedTodo || !this.props.statusesLoaded) {
      //data hasnt been loaded yet
      return <div>Loading...</div>;
    }

    return <TodoEdit history={this.props.history} />;
  }
}

//All below is redux information storage
const mapStateToProps = ({
  todoReducer,
  statusReducer,
  tagReducer,
  requesterReducer,
  assignReducer
}) => {
  const { loadedTodo } = todoReducer;
  const { statusesLoaded } = statusReducer;
  const { tagsLoaded } = tagReducer;
  const { assignLoaded } = assignReducer;
  const { requesterLoaded } = requesterReducer;
  return {
    loadedTodo,
    statusesLoaded,
    tagsLoaded,
    requesterLoaded,
    assignLoaded
  };
};

export default connect(mapStateToProps, {
  getTodo,
  startLoadingTodo,
  getStatuses,
  startLoadingStatuses,
  getTags,
  startLoadingTags,
  getAssigned,
  startLoadingAssigned,
  getRequesters,
  startLoadingRequesters
})(TodoEditLoader);
