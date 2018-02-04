import React, { Component } from 'react';
import SliderComponent from './Slider';
import Profile from './Profile';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Table
} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'profile'
    };
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">My Github Profile</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href="#"
              onClick={() => this.setState({ currentTab: 'slider' })}
            >
              SliderComponent
            </NavItem>
            <NavItem
              eventKey={2}
              href="#"
              onClick={() => this.setState({ currentTab: 'profile' })}
            >
              Profile
            </NavItem>
          </Nav>
        </Navbar>
        <div>
          {this.state.currentTab === 'slider' ? <SliderComponent /> : false}
        </div>
        <div>{this.state.currentTab === 'profile' ? <Profile /> : false}</div>
      </div>
    );
  }
}

export default App;
