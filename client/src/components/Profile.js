import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      editing: false
    };
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      profile: nextProps.profile
    });
  }

  clickMethod() {
    this.setState({
      editing: !this.state.editing
    });
  }

  updateValue(parameter, event) {
    var userInfoCopy = JSON.parse(JSON.stringify(this.state.profile));
    userInfoCopy[parameter] = event.target.value;
    this.setState({ profile: userInfoCopy });
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
              value={this.state.profile.name}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'name')}
            />
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              value={this.state.profile.login}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'login')}
            />
            <ControlLabel>Bio</ControlLabel>
            <FormControl
              type="text"
              value={this.state.profile.bio}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'bio')}
            />
            <ControlLabel>Location</ControlLabel>
            <FormControl
              type="text"
              value={this.state.profile.location}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'location')}
            />
            <ControlLabel>Company</ControlLabel>
            <FormControl
              type="text"
              value={this.state.profile.company}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'company')}
            />
          </FormGroup>
        ) : (
          <div>
            <p>
              <strong>Name</strong>
              <br />
              {this.state.profile.name}
            </p>
            <p>
              <strong>Username</strong>
              <br />
              {this.state.profile.login}
            </p>
            <p>
              <strong>Bio</strong>
              <br />
              {this.state.profile.bio}
            </p>
            <p>
              <strong>Location</strong>
              <br />
              {this.state.profile.location}
            </p>
            <p>
              <strong>Company</strong>
              <br />
              {this.state.profile.company}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
