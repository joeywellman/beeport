import React, { Component } from "react"
// import { Route, Redirect } from "react-router-dom"
// import InputMask from 'react-input-mask';
import "./login.css";
import Beeport from "./Beeport.jpg"
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
        listSwarm: "",
        listPollinate: "",
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
                    listSwarm: this.state.listSwarm,
                    listPollinate: this.state.listPollinate,
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
                {/* <h1 className="font-weight-bold">Beeport</h1> */}
                <a href="http://localhost:3000/apregs"><img src={Beeport} alt="Beeport Logo" height="20%" width="20%"></img></a>
                <h2 className="h3 mb-3 font-weight-bold header-text">New User Registration</h2>
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
                <select
                    onChange={this.handleFieldChange}
                    type="text"
                    id="locationCounty"
                    placeholder="Cabell"
                    required
                    value={this.state.locationCounty}>
                    <option value="Choose County">Choose Your County</option>
                    <option value="Barbour">Barbour</option>
                    <option value="Berkeley">Berkeley</option>
                    <option value="Boone">Boone</option>
                    <option value="Braxton">Braxton</option>
                    <option value="Brooke">Brooke</option>
                    <option value="Cabell">Cabell</option>
                    <option value="Calhoun">Calhoun</option>
                    <option value="Clay">Clay</option>
                    <option value="Doddridge">Doddridge</option>
                    <option value="Fayette">Fayette</option>
                    <option value="Gilmer">Gilmer</option>
                    <option value="Grant">Grant</option>
                    <option value="Greenbrier">Greenbrier</option>
                    <option value="Hampshire">Hampshire</option>
                    <option value="Hancock">Hancock</option>
                    <option value="Hardy">Hardy</option>
                    <option value="Harrison">Harrison</option>
                    <option value="Jackson">Jackson</option>
                    <option value="Jefferson">Jefferson</option>
                    <option value="Kanawha">Kanawha</option>
                    <option value="Lewis">Lewis</option>
                    <option value="Lincoln">Lincoln</option>
                    <option value="Logan">Logan</option>
                    <option value="Marion">Marion</option>
                    <option value="Marshall">Marshall</option>
                    <option value="Mason">Mason</option>
                    <option value="McDowell">McDowell</option>
                    <option value="Mercer">Mercer</option>
                    <option value="Mineral">Mineral</option>
                    <option value="Mingo">Mingo</option>
                    <option value="Monongalia">Monongalia</option>
                    <option value="Monroe">Monroe</option>
                    <option value="Morgan">Morgan</option>
                    <option value="Nicholas">Nicholas</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Pendleton">Pendleton</option>
                    <option value="Pleasants">Pleasants</option>
                    <option value="Pocahontas">Pocahontas</option>
                    <option value="Preston">Preston</option>
                    <option value="Putnam County">Putnam</option>
                    <option value="Raleigh">Raleigh</option>
                    <option value="Randolph">Randolph</option>
                    <option value="Ritchie">Ritchie</option>
                    <option value="Roane">Roane</option>
                    <option value="Summers">Summers</option>
                    <option value="Taylor">Taylor</option>
                    <option value="Tucker">Tucker</option>
                    <option value="Tyler">Tyler</option>
                    <option value="Upshur">Upshur</option>
                    <option value="Wayne">Wayne</option>
                    <option value="Webster">Webster</option>
                    <option value="Wetzel">Wetzel</option>
                    <option value="Wirt">Wirt</option>
                    <option value="Wood">Wood</option>
                    <option value="Wyoming">Wyoming</option>
                </select>
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
                <select
                    onChange={this.handleFieldChange}
                    type="text"
                    id="locationState"
                    placeholder="WV"
                    required
                    value={this.state.locationState}>
                    <option value="Choose State">Choose Your State</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Michigan">Michigan</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Washington">Washington</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </select>
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

                <label htmlFor="listSwarm">Would you like to be included on a "Swarm List", to help the public mitigate identified swarms?:<br />
                    <i>*Your name, county and telephone number(s) will be made available to the public for the purpose of removing swarms.</i></label>
                <select
                    onChange={this.handleFieldChange}
                    type="text"
                    id="listSwarm"
                    value={this.state.listSwarm}>
                    <option value="" placeholder="Select an Answer">Select an Answer:</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <label htmlFor="listPollinate">Would you like to be included on a "Pollination List", to help the public identify Beekeepers availavble for Pollination Services?:<br />
                    <i>*Your name, county and telephone number(s) will be made available to the public for the purpose of removing swarms.</i></label>
                <select
                    onChange={this.handleFieldChange}
                    type="text"
                    id="listPollinate"
                    value={this.state.listSwarm}>
                    <option value="" placeholder="Select an Answer">Select an Answer:</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <label htmlFor="keepBees"><b>*</b>Are You Still Keeping Bees?:<br />
                    <i>If you are no longer keeping bees, select "No" and we will remove you from our mailing list.</i></label>
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
