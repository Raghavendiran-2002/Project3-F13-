import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import NavUnAuth from "../components/nav-unauth";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="centered h-screen -mt-20">
            <div>
              <p className="titleF13">Welcome to F13 Technologies!!! </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
