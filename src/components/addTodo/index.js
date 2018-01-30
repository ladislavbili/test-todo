import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getStatuses,
  startLoadingStatuses,
  getTags,
  startLoadingTags
} from "../../redux/actions";
import TodoAdd from "./addTodo";

class TodoAddLoader extends Component {
  componentWillMount() {
    this.props.startLoadingStatuses(); // first it sets, that unit hasnt been loaded
    this.props.getStatuses();
    this.props.getTags();
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
const mapStateToProps = ({ statusReducer, tagReducer }) => {
  const { statusesLoaded } = statusReducer;
  const { tagLoaded } = tagReducer;
  return { statusesLoaded, tagLoaded };
};

export default connect(mapStateToProps, {
  getStatuses,
  startLoadingStatuses,
  getTags,
  startLoadingTags
})(TodoAddLoader);
