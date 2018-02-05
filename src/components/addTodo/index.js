import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getStatuses,
  startLoadingStatuses,
  getTags,
  startLoadingTags,
  getAssigned,
  startLoadingAssigned,
  getRequesters,
  startLoadingRequesters
} from "../../redux/actions";
import TodoAdd from "./addTodo";

class TodoAddLoader extends Component {
  componentWillMount() {
    this.props.startLoadingStatuses(); // first it sets, that unit hasnt been loaded
    this.props.getStatuses();
    this.props.getTags();
    this.props.getRequesters();
    this.props.getAssigned();
  }
  render() {
    if (!this.props.statusesLoaded) {
      //data hasnt been loaded yet
      return <div>Loading...</div>;
    }
    return <TodoAdd history={this.props.history} />;
  }
}

//All below is redux information storage
const mapStateToProps = ({
  statusReducer,
  tagReducer,
  requesterReducer,
  assignReducer
}) => {
  const { statusesLoaded } = statusReducer;
  const { tagLoaded } = tagReducer;
  const { assignLoaded } = assignReducer;
  const { requesterLoaded } = requesterReducer;
  return { statusesLoaded, tagLoaded, requesterLoaded, assignLoaded };
};

export default connect(mapStateToProps, {
  getStatuses,
  startLoadingStatuses,
  getTags,
  startLoadingTags,
  getAssigned,
  startLoadingAssigned,
  getRequesters,
  startLoadingRequesters
})(TodoAddLoader);
