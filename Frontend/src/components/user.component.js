import React, { Component } from "react";
import AdminDataService from "../services/admin.service";
import { withRouter } from "../common/with-router";

class User extends Component {
  constructor(props) {
    super(props);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updateApproved = this.updateApproved.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
    this.deleteUsers = this.deleteUsers.bind(this);

    this.state = {
      currentUser: {
        id: null,
        role: "",
        username: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.router.params.id);
  }

  onChangeRole(e) {
    const role = e.target.value;

    this.setState(function (prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          role: role,
        },
      };
    });
  }

  onChangeUsername(e) {
    const username = e.target.value;

    this.setState((prevState) => ({
      currentUser: {
        ...prevState.currentUser,
        username: username,
      },
    }));
  }

  getTutorial(id) {
    AdminDataService.get(id)
      .then((response) => {
        this.setState({
          currentUser: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateApproved(status) {
    var data = {
      id: this.state.currentUser.id,
      role: this.state.currentUser.role,
      username: this.state.currentUser.username,
      published: status,
    };

    AdminDataService.update(this.state.currentUser.id, data)
      .then((response) => {
        this.setState((prevState) => ({
          currentUser: {
            ...prevState.currentUser,
            published: status,
          },
        }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateUsers() {
    AdminDataService.update(this.state.currentUser.id, this.state.currentUser)
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteUsers() {
    AdminDataService.delete(this.state.currentUser.id)
      .then((response) => {
        console.log(response.data);
        this.props.router.navigate("/users");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        {currentUser ? (
          <div className="edit-form">
            <h4>User</h4>
            <form>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  value={currentUser.role}
                  onChange={this.onChangeRole}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={currentUser.username}
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentUser.published ? "Approved" : "Pending"}
              </div>
            </form>

            {currentUser.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateApproved(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateApproved(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteUsers}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUsers}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(User);
