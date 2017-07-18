import * as React from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import { urls } from "../../urls";
import Login from "./Login";

export class LoginPageRoot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      confirmPassword: ''
    }
  }

  public handleFieldChanges = ({ target }) => {
    this.setState({
      ...this.state,
      [target.name]: target.value,
    });
  };

  render() {
    return (
      <div>
        <Login
        onChange={this.handleFieldChanges}
        credentials={this.state}
      />
      </div>
    )
  }
}

