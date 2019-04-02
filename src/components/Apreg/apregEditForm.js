import React, { Component } from "react";
import apregAPIManager from "./apregsAPIManager";
import './apregs.css'


export default class ApregEditForm extends Component {
  // Set Initial State:
  state = {
    numberOfColonies: "",
    numberOfApiaries: "",
    apregLocation: "",
    userId: sessionStorage.getItem("userId")
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateApreg = evt => {
    evt.preventDefault();

    if (this.state.numberOfColonies === "") {
      window.alert("You must enter your total number of colonies.");
      } else if (this.state.numberOfApiaries === "") {
        window.alert("You must enter the total number of apiaries you operate.");
      } else if (this.state.apregLocation === "") {
        window.alert("ENTER REQUIREMENT STATEMENT HERE.");
      } else {
        const editedApreg = {
          id: this.props.match.params.apregId,
          numberOfColonies: this.state.numberOfColonies,
          numberOfApiaries: this.state.numberOfApiaries,
          location: this.state.apregLocation,
          userId: parseInt(sessionStorage.getItem("userId"))
        };

        this.props.updateApreg(editedApreg)
          .then(() => this.props.history.push("/apregs"));
      }
    };

    componentDidMount() {
      apregAPIManager.getSingleApreg(this.props.match.params.apregId).then(apreg => {
        this.setState({
          numberOfColonies: apreg.numberOfColonies,
          numberOfApiaries: apreg.numberOfApiaries,
          apregLocation: apreg.location,

        });
        console.log(apreg)
      });
    }

    render() {
      return (
        <React.Fragment>
          <div className="editCard">
            <div className="card-body">
              <h5 className="card-title">
                <form className="apregForm">
                  <div className="form-group">
                    <label htmlFor="numberOfColonies">Number of Colonies at Time of Application:</label>
                    <input
                      type="number"
                      required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="numberOfColonies"
                      value={this.state.numberOfColonies}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="numberOfApiaries">Number of Apiaries:</label>
                    <input
                      type="number"
                      required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="numberOfApiaries"
                      value={this.state.numberOfApiaries}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apregLocation">Location</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="apregLocation"
                      value={this.state.apregLocation}
                    />
                  </div>
                  <input
                    type="hidden"
                    required
                    className="form-control"
                    // onChange={this.handleFieldChange}
                    id="userId"
                    value={this.state.userId}
                  />

                  <button
                    type="submit"
                    onClick={this.updateApreg}
                    className="btn btn-primary"
                  >
                    Save Changes
                </button>
                </form>
              </h5>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }