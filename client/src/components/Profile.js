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
    let header = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'token 3a10937b87bf154b6e1798384a275d3ab438fc98'
    });
    fetch('https://api.github.com/users/dubiBerlin', {
      method: 'GET',
      Headers: header
    })
      .then(response => response.json()) // formats the response to a json object
      .then(json => {
        this.setState({
          userInfo: json
        });

        console.log(
          '\n\nactions_info JSON' + JSON.stringify(json, undefined, 2)
        );
        // dispatch alerts the reducer and gives him the action-info
        //dispatch(loadInfo(json));
      })
      .catch(error => {
        console.log(error);
      });
  }

  clickMethod() {
    this.setState({
      editing: !this.state.editing
    });
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
            <ControlLabel>Name:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.login}
              placeholder="Enter text"
              //onChange={this.handleChange}
            />
          </FormGroup>
        ) : (
          <div>
            <p>
              <strong>
                Name:
                {this.state.userInfo.login}
              </strong>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
