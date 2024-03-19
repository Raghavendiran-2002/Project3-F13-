import React, { Component } from "react";
import AdminDataService from "../services/admin.service";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  saveAdmin() {
    var data = {
      role: this.state.role,
      username: this.state.username,
      password: this.state.password,
    };

    AdminDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          role: response.data.role,
          username: response.data.username,
          password: response.data.password,
          published: response.data.published,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newAdmin() {
    this.setState({
      id: null,
      role: "",
      username: "",
      password: "",
      published: false,
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newAdmin}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
                name="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>
            <Link to={"/"} className="navbar-brand">
              <button className="btn btn-success">Submit</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
