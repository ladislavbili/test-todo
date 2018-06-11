import React, { Component } from "react";
import Sidebar from "./sidebar";

export default class SidebarLoader extends Component {
  constructor(props){
    super(props);
    this.state={
      loadingProjects:true,
      projects:null,
      loadingFilters:true,
      filters:null,
    }
  }

  componentWillMount() {
    fetch("http://localhost:3001/projects", { method: "GET" })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              this.setState({loadingProjects:false,projects:decodedResponse});
            })

            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));

    fetch("http://localhost:3001/filters", { method: "GET" })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              this.setState({loadingFilters:false,filters:decodedResponse});
            })

            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    if(this.state.loadingProjects || this.state.loadingFilters){
      return <div>Loading sidebar...</div>
    }
    return <Sidebar filters={this.state.filters} projects={this.state.projects}/>;
  }
}
