import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Beeport.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Beeport extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Beeport;
