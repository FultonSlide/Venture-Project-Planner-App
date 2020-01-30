import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import Landing from './components/static/Landing';
import SideDrawer from './components/sideDrawer/SideDrawer';
import BurgerMenu from './components/sideDrawer/BurgerMenu';

class App extends Component {
  state = {
    sideDrawerActive: false
  }

  drawerToggleClickHandler = () => {
    console.log('side drawer active');
    this.setState((prevState) => {
      return { sideDrawerActive: !prevState}
    });
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <BurgerMenu drawerClickHandler={this.drawerToggleClickHandler} sideDrawerActive={this.state.sideDrawerActive}/>
          <SideDrawer/>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/create' component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
