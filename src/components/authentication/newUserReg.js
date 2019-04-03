import React, { Component } from "react"
// import { Route, Redirect } from "react-router-dom"
// import InputMask from 'react-input-mask';
import "./login.css";
import userAPIManager from "./userManager"


export default class NewUserReg extends Component {
    // Set Initial State:
    state = {
        userName: "",
        userEmail: "",
        userPassword: "",
        passwordCheck: "",
        nameFirst: "",
        nameLast: "",
        locationCounty: "",
        address1: "",
        address2: "",
        locationCity: "",
        locationState: "",
        locationZip: "",
        telHome: "",
        telCell: "",
        telWork: "",
        keepBees: ""
    }

    // Update State whenever an Input Field is Edited:
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleCheckbox = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.checked
        this.setState(stateToChange)
    }

    goBack() {
        window.history.back()
    }

    handleRegister = e => {
        e.preventDefault()

        if (this.state.userName === "") {
            window.alert("Please enter your user name.")
        } else if (this.state.userEmail === "") {
            window.alert("Please enter your email address.")
        } else if
            (this.state.userPassword !== this.state.passwordCheck) {
            window.alert("Passwords do not match! Please try again")
        }
        if (this.state.userEmail !== "" && this.state.userName !== "" && this.state.userPassword === this.state.passwordCheck)
            var counter = 0
        userAPIManager.getAllUsers().then(au => {
            au.forEach(u => {
                if (
                    u.userName === this.state.userName ||
                    u.userEmail === this.state.userEmail
                ) {
                    counter = counter + 1;
                    alert(
                        "The username or email you entered has already been used.  Please choose a different username and/or email"
                    )
                }
            })

            //If userName and userEmail are unique, then counter will be "0":
            if (counter < 1) {
                const newUser = {
                    userName: this.state.userName,
                    userEmail: this.state.userEmail,
                    userPassword: this.state.userPassword,
                    nameFirst: this.state.nameFirst,
                    nameLast: this.state.nameLast,
                    locationCounty: this.state.locationCounty,
                    address1: this.state.address1,
                    address2: this.state.address2,
                    locationCity: this.state.locationCity,
                    locationState: this.state.locationState,
                    locationZip: this.state.locationZip,
                    telHome: this.state.telHome,
                    telCell: this.state.telCell,
                    telWork: this.state.telWork,
                    keepBees: this.state.keepBees
                }
                userAPIManager.postUser(newUser).then(pu => {
                    if (this.state.rememberMe === true) {
                        localStorage.setItem("userId", pu.id)
                        sessionStorage.setItem("userId", pu.id)
                        this.props.getUserApregs(parseInt(sessionStorage.getItem("userId")))
                        this.props.history.push("/home")
                        window.location.reload();

                    } else {
                        sessionStorage.setItem("userId", pu.id)
                        this.props.getUserApregs(parseInt(sessionStorage.getItem("userId")))
                        this.props.history.push("/home")
                        window.location.reload();
                    }
                }
                )
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleRegister}>
                <h1 className="font-weight-bold">Beeport</h1>
                <h2 className="h3 mb-3 font-weight-bold">New User Registration</h2>
                <br />

                <label htmlFor="userName">User Name:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="text"
                    id="userName"
                    placeholder="User Name"
                    required
                    autoFocus
                />
                <br />

                <label htmlFor="userEmail">Email Address:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="email"
                    id="userEmail"
                    placeholder="Email Address"
                    required
                />
                <br />

                <label htmlFor="userPassword">Choose A Password:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="password"
                    id="userPassword"
                    placeholder="Enter Password"
                    required
                />
                <br />

                <label htmlFor="passwordCheck">Re-Enter Password:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="password"
                    id="passwordCheck"
                    placeholder="Re-Enter Password"
                    required=""
                />
                <br />

                <label htmlFor="rememberMe">
                    Remember Me
                </label>
                <input onChange={this.handleCheckbox} type="checkbox"
                    id="rememberMe"
                    placeholder=""
                    required="" autoFocus="" />
                <br />

                <h2 className="h3 mb-3 font-weight-bold">Beekeeper Information</h2>
                <br />

                <label htmlFor="nameFirst">First Name:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="text"
                    id="nameFirst"
                    placeholder="John"
                    required
                />
                <br />

                <label htmlFor="nameLast">Last Name:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="text"
                    id="nameLast"
                    placeholder="Smith"
                    required
                />
                <br />
                {/* County Selection will be from a Dropdown: */}
                <label htmlFor="locationCounty">County:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="text"
                    id="locationCounty"
                    placeholder="Cabell"
                    required
                />
                <br />

                <label htmlFor="address1">Address 1:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="address"
                    id="address1"
                    placeholder="1234 Main St."
                    required
                />
                <br />

                <label htmlFor="address2">Address 2:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="address"
                    id="address2"
                    placeholder="Apartment #5"
                />
                <br />

                <label htmlFor="locationCity">City:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="text"
                    id="locationCity"
                    placeholder="Charleston"
                    required
                />
                <br />
                {/* State Selection will be from a Dropdown: */}
                <label htmlFor="locationState">State:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="text"
                    id="locationState"
                    placeholder="WV"
                    required
                />
                <br />

                <label htmlFor="locationZip">Zip Code:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="number"
                    id="locationZip"
                    placeholder="25704"
                    required
                />
                <br />

                <label htmlFor="telHome">Home Phone:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="tel"
                    id="telHome"
                    placeholder="304-123-4567"
                    required
                />
                <br />

                <label htmlFor="telCell">Cell Phone:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="tel"
                    id="telCell"
                    placeholder="304-123-4567"
                />
                <br />

                <label htmlFor="telWork">Work Phone:</label>
                <input
                    onChange={this.handleFieldChange}
                    type="tel"
                    id="telWork"
                    placeholder="304-123-4567"
                />
                <br />
                {/* This Will Eventually Be a Dropdown Selection or Checkbox: */}
                <label htmlFor="keepBees">Are You Still Keeping Bees?:</label>
                <select
                    onChange={this.handleFieldChange}
                    type="text"
                    id="keepBees"
                    value={this.state.keepBees}>
                    <option value="" placeholder="Select an Answer">Select an Answer:</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <br />
                <br />
                <br />

                <button type="submit" className="btn btn-success"> <b>Register User (Log In)</b> </button>
            </form>
        )
    }
}
