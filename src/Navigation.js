import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import styles from './styles.js';
import App from "./components/todoList";
import Add from "./components/addTodo";
import EditTodo from "./components/editTodo";
import Sidebar from "./components/sidebar";
import { Nav, NavItem, Row, Input,InputGroup,InputGroupAddon } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
const sidebarWidth=300;
const filterWidth=200;

export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state={
      displaySidebar:true,
      displayFilter:false,
    };
  }
  render() {
    let routerMargin=0;
    if(this.state.displaySidebar){
      routerMargin+=sidebarWidth;
    }
    if(this.state.displayFilter){
      routerMargin+=filterWidth;
    }
    return (
      <div>
        <div className="App">
          <Nav className="App-header">
            <NavItem style={{paddingLeft:10, cursor:'pointer', fontSize:'20px'}}
              onClick={()=>this.setState({displaySidebar:!this.state.displaySidebar})}>
              <i
                className='fa fa-bars'
                />
            </NavItem>
            <NavItem style={{paddingLeft:10, cursor:'pointer', fontSize:'20px'}}
              onClick={()=>this.setState({displayFilter:!this.state.displayFilter})}>
              <i
                className='fa fa-filter'
                />
            </NavItem>
            <NavItem>
              <InputGroup style={{color:'black', backgroundColor:'white', borderRadius:10, marginLeft: 10, paddingLeft: 10}}>
                <InputGroupAddon>
                  <i className="fa fa-search" style={{ fontSize:'15px', marginTop:10}} />
                </InputGroupAddon>
                <Input style={{ border:'none'}} placeholder="search" />
              </InputGroup>
              </NavItem>
          </Nav>

          <Row style={styles.main}>
            <div style={{transition:"1s",width:sidebarWidth,position:'absolute', backgroundColor:'white', zIndex:50, ...this.state.displaySidebar?{}:{marginLeft:-sidebarWidth}}}>
              <Sidebar />
            </div>
            <div style={{width:filterWidth,position:'absolute',transition:"1s", zIndex:49,left:this.state.displaySidebar?sidebarWidth:0, ...this.state.displayFilter?{}:{marginLeft: -filterWidth}}}>
              filter
            </div>
            <div style={{marginLeft:routerMargin,transition:'1s', width:'100%'}}>
              <HashRouter>
                <div>
                  <Switch>
                    <Route exact home path="/" component={App} />
                  </Switch>
                  <Switch>
                    <Route home path="/filter/add" component={Add} />
                  </Switch>
                  <Switch>
                    <Route home path="/filter/:id" component={App} />
                  </Switch>
                  <Switch>
                    <Route home path="/project/:id" component={App} />
                  </Switch>
                  <Switch>
                    <Route exact path="/add" component={Add} />
                  </Switch>
                  <Switch>
                    <Route exact path="/task/add" component={Add} />
                  </Switch>
                  <Switch>
                    <Route exact path="/edit/:id" component={EditTodo} />
                  </Switch>
                </div>
              </HashRouter>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}
