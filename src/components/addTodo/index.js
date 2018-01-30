import React, { Component } from "react";
import { connect } from "react-redux";

import { getStatuses, startLoadingStatuses } from "../../redux/actions";
import TodoAdd from "./addTodo";

class TodoAddLoader extends Component {
  componentWillMount() {
    this.props.startLoadingStatuses(); // first it sets, that unit hasnt been loaded
    this.props.getStatuses();
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
const mapStateToProps = ({ statusReducer }) => {
  const { statusesLoaded } = statusReducer;
  return { statusesLoaded };
};

export default connect(mapStateToProps, {
  getStatuses,
  startLoadingStatuses
})(TodoAddLoader);
