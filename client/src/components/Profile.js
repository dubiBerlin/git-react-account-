import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      editing: false
    };
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  clickMethod() {
    this.setState({
      editing: !this.state.editing
    });
  }

  updateValue(parameter, event) {
    var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
    userInfoCopy[parameter] = event.target.value;
    this.setState({ userInfo: userInfoCopy });
  }

  render() {
    return (
      <div className="container">
        <Button bsStyle="primary" onClick={this.clickMethod.bind(this)}>
          Edit
        </Button>

        {this.state.editing ? (
          <FormGroup
            controlId="formBasicText"
            //validationState={this.getValidationState()}
          >
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.name}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'name')}
            />
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.login}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'login')}
            />
            <ControlLabel>Bio</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.bio}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'bio')}
            />
            <ControlLabel>Location</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.location}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'location')}
            />
            <ControlLabel>Company</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.company}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'company')}
            />
          </FormGroup>
        ) : (
          <div>
            <p>
              <strong>Name</strong>
              <br />
              {this.state.userInfo.name}
            </p>
            <p>
              <strong>Username</strong>
              <br />
              {this.state.userInfo.login}
            </p>
            <p>
              <strong>Bio</strong>
              <br />
              {this.state.userInfo.bio}
            </p>
            <p>
              <strong>Location</strong>
              <br />
              {this.state.userInfo.location}
            </p>
            <p>
              <strong>Company</strong>
              <br />
              {this.state.userInfo.company}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
