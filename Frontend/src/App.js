import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import User from "./components/user.component";
import TutorialsList from "./components/tutorials-list.component";
import UsersList from "./components/users-list.component";
import AddUser from "./components/add-user.component";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NavAuth from "./components/nav-auth";
import NavUnAuth from "./components/nav-unauth";

class App extends Component {
  render() {
    return (
      <div>
        <NavAuth />
        {/* <NavUnAuth /> */}

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tutorials" element={<TutorialsList />} />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/tutorials/:id" element={<Tutorial />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/auth" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
