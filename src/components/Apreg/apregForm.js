import React, { Component } from "react";
import "./apregs.css";
// import apregsAPIManager from './apregsAPIManager'


export default class ApregForm extends Component {
    // Set INITIAL State:
    state = {
        numberOfColonies: "",
        numberOfApiaries: "",
        apregLocation: ""
    };

    // UPDATE State whenever an Input Field is EDITED:
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // Local Method for Validation, CREATING Apreg (Apiary Registration) Object, and invoking Function Reference passed from Parent Component:
    buildNewApreg = evt => {
        evt.preventDefault();
        if (this.state.numberOfColonies === "") {
            window.alert("Please enter your total number of colonies.");
        } else if (this.state.numberOfApiaries === "") {
            window.alert("Please choose the number of apiaries you operate.");
        } else {
            const newApreg = {
                numberOfColonies: this.state.numberOfColonies,
                numberOfApiaries: this.state.numberOfApiaries,
                location: this.state.apregLocation,
                userId: parseInt(sessionStorage.getItem("userId"))
            };
  // Create the Apiary Registration (Apreg) / Redirect User to Annual Apiary Registration List:
            this.props.postApreg(newApreg)
                .then(() => this.props.history.push("/apregs"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="apregsForm">
                    <div className="form-group">
                        <label htmlFor="numberOfColonies">Number of Colonies at Time of Application:</label>
                        <input
                            type="number"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="numberOfColonies"
                            placeholder="# of Colonies"
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
                            placeholder="1"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apregLocation">Apiary Location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="apregLocation"
                            placeholder="Where is this Apiary Located? (placeholder)"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.buildNewApreg}
                        className="btn btn-primary">

                        Add New Apiary Registration
                    </button>
                </form>
            </React.Fragment>
        );
    }
}