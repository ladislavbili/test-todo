import React, { Component } from "react";
import { Button, InputGroup, FormGroup, NavItem, Nav, NavLink } from 'reactstrap';
import Select from "react-select";
import '../../App.css';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state={
      project:{id:'all',title:'All', value:'all', label:'All'},
    }
  }

  render() {
    console.log(this.props.projects);
    return (
      <div style={{padding:5,marginRight:'2px', borderRight: '2px solid black', height:'calc(100vh - 56px)', textAlign:'left'}}>
        <NavLink href="#/task/add">
          <Button color="primary" style={{width:'100%', paddingTop:10}}><i className="fa fa-plus" style={{float:'left',fontSize:'15px', marginTop:5}} /> Task</Button>
        </NavLink>
        <FormGroup style={{marginTop:15,fontSize:18}}>
          <label htmlFor="projectSelect"><i className="fa fa-folder" style={{float:'left', marginTop:5, marginRight:5}} /> Project</label>
          <InputGroup>
            <Select
              className="fullWidth"
              id="projectSelect"
              options={([{id:'all',title:'All'}].concat(this.props.projects.filter((proj)=>proj.is_active))).map(project => {
                project.label = project.title;
                project.value = project.id;
                return project;
              })}
              value={this.state.project}
              onChange={e => {
                this.setState({ project: e });
              }}
              />
          </InputGroup>
        </FormGroup>

        <Nav vertical style={{fontSize:18}}>
        {this.props.filters.map((item)=>
          <NavLink href={"#/filter/"+item.id} className="sidebarNavItem" style={{paddingTop:5, paddingBottom:5, paddingLeft:10}}>
            {item.title}
          </NavLink>
        )}
        <NavLink href="#/filter/add" className="sidebarNavItem" style={{paddingTop:5, paddingBottom:5}}>
          <i className="fa fa-plus" style={{float:'left',fontSize:'15px', paddingTop:5, paddingBottom:5}} /> <span style={{marginLeft:5 }}>Filter</span>
        </NavLink>


        <label style={{paddingTop:20}}><i className="fa fa-archive" style={{float:'left', marginTop:5 }} /><span style={{marginLeft:5 }}>Archived</span></label>
        {this.props.projects.filter((proj)=>!proj.is_active).map((item)=>
          <NavLink href={"#/project/"+item.id} className="sidebarNavItem" style={{paddingTop:5, paddingBottom:5, paddingLeft:10}}>
            {item.title}
          </NavLink>
        )}

        </Nav>

      </div>
    );
  }

}
