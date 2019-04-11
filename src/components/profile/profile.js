import React, { Component } from "react";
import profileAPIManager from "./profileAPIManager";
import './profile.css'
import Beeport from "../authentication/Beeport.jpg"


export default class Profile extends Component {
    // Set Initial State:
    state = {
        profileNameFirst: "",
        profileNameLast: "",
        profileLocationCounty: "",
        profileAddress1: "",
        profileAddress2: "",
        profileLocationCity: "",
        profileLocationState: "",
        profileLocationZip: "",
        profileTelHome: "",
        profileTelCell: "",
        profileTelWork: "",
        profileKeepBees: "",
        profileListSwarm: "",
        profileListPollinate: "",
        userId: sessionStorage.getItem("userId")
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleCheckbox = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.checked
        this.setState(stateToChange)
    }

    updateApreg = evt => {
        evt.preventDefault();
        if (this.state.profileNameFirst === "") {
            window.alert("Please provide your first name.");
        } else if (this.state.profileNameLast === "") {
            window.alert("Please provide your last name.");
        } else if (this.state.profileLocationCounty === "") {
            window.alert("Please select your county of residence.");
        } else if (this.state.profileAddress1 === "") {
            window.alert("In what city do you reside?");
        } else if (this.state.profileLocationState === "") {
            window.alert("Please select your state of residence.");
        } else if (this.state.profileLocationZip === "") {
            window.alert("Please enter your zip code.");
        } else if (this.state.profileTelHome === "") {
            window.alert("You must provide a home telephone number.");
        } else if (this.state.profileTelCell === "") {
            window.alert("If you do not have a cell phone, please input your home telephone number.");
        } else if (this.state.profileKeepBees === "") {
            window.alert("Do you currently keep bees?");
        } else if (this.state.profileListSwarm === "") {
            window.alert("Would you like to be included on the swarm contact list?");
        } else if (this.state.profileListPollinate === "") {
            window.alert("Would you like to be included on the pollination services contact list?");
        } else {
            var dt = new Date();
            var moment = require('moment');
            var profileTimestamp = moment(dt).format("YYYY-MM-DD HH:mm:ss")
            const editedProfile = {
                timestamp: profileTimestamp,
                nameFirst: this.state.profileNameFirst,
                nameLast: this.state.profileNameLast,
                locationCounty: this.state.profileLocationCounty,
                address1: this.state.profileAddress1,
                address2: this.state.profileAddress2,
                locationCity: this.state.profileLocationCity,
                locationState: this.state.profileLocationState,
                locationZip: this.state.profileLocationZip,
                telHome: this.state.profileTelHome,
                telCell: this.state.profileTelCell,
                telWork: this.state.profileTelWork,
                keepBees: this.state.profileKeepBees,
                listSwarm: this.state.profileListSwarm,
                listPollinate: this.state.profileListPollinate,
                userId: parseInt(sessionStorage.getItem("userId"))
            };

            this.props.updateProfile(editedProfile)
                .then(() => this.props.history.push("/profile"));
        }
    };

    componentDidMount() {
        profileAPIManager.getSingleProfile(sessionStorage.getItem("userId")).then(user => {
            this.setState({
                profileTimestamp: user.profileTimestamp,
                profileNameFirst: user.nameFirst,
                profileNameLast: user.nameLast,
                profileLocationCounty: user.locationCounty,
                profileAddress1: user.address1,
                profileAddress2: user.address2,
                profileLocationCity: user.locationCity,
                profileLocationState: user.locationState,
                profileLocationZip: user.locationZip,
                profileTelHome: user.telHome,
                profileTelCell: user.telCell,
                profileTelWork: user.telWork,
                profileKeepBees: user.keepBees,
                profileListSwarm: user.listSwarm,
                profileListPollinate: user.listPollinate,
            });
            console.log(user)
        });
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="header-text"><a href="http://localhost:3000/home"><img src={Beeport} alt="Beeport Logo" height="20%" width="20%"></img></a><br />
                    Update User Profile</h2>
                <form className="profileEditForm">
                    <h3 className="">
                        Edit Beekeeper Details</h3><br />
                    <label htmlFor="profileNameFirst">First Name:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="text"
                        id="profileNameFirst"
                        placeholder="John"
                        required
                        value={this.state.profileNameFirst}
                    />
                    <br />

                    <label htmlFor="profileNameLast">Last Name:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="text"
                        id="profileNameLast"
                        placeholder="Smith"
                        required
                        value={this.state.profileNameLast}
                    />
                    <br />
                    <label htmlFor="profileLocationCounty">County:</label>
                    <select
                        onChange={this.handleFieldChange}
                        type="text"
                        id="profileLocationCounty"
                        placeholder="Cabell"
                        required
                        value={this.state.profileLocationCounty}>
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

                    <label htmlFor="profileAddress1">Address 1:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="address"
                        id="profileAddress1"
                        placeholder="1234 Main St."
                        required
                        value={this.state.profileAddress1}
                    />
                    <br />

                    <label htmlFor="profileAddress2">Address 2:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="address"
                        id="profileAddress2"
                        placeholder="Apartment #5"
                        value={this.state.profileAddress2}
                    />
                    <br />

                    <label htmlFor="profileLocationCity">City:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="text"
                        id="profileLocationCity"
                        placeholder="Charleston"
                        required
                        value={this.state.profileLocationCity}
                    />
                    <br />
                    <label htmlFor="locationState">State:</label>
                    <select
                        onChange={this.handleFieldChange}
                        type="text"
                        id="profileLocationState"
                        placeholder="WV"
                        required
                        value={this.state.profileLocationState}>
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

                    <label htmlFor="profileLocationZip">Zip Code:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="number"
                        id="profileLocationZip"
                        placeholder="25704"
                        required
                        value={this.state.profileLocationZip}
                    />
                    <br />

                    <label htmlFor="profileTelHome">Home Phone:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="tel"
                        id="profileTelHome"
                        placeholder="304-123-4567"
                        required
                        value={this.state.profileTelHome}
                    />
                    <br />

                    <label htmlFor="profileTelCell">Cell Phone:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="tel"
                        id="profileTelCell"
                        placeholder="304-123-4567"
                        value={this.state.profileTelCell}
                    />
                    <br />

                    <label htmlFor="profileTelWork">Work Phone:</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="tel"
                        id="profileTelWork"
                        placeholder="304-123-4567"
                        value={this.state.profileTelWork}
                    />
                    <br />

                    <label htmlFor="profileListSwarm">Would you like to be included on a "Swarm List", to help the public mitigate identified swarms?:<br />
                        <i>*Your name, county and telephone number(s) will be made available to the public for the purpose of removing swarms.</i></label>
                    <select
                        onChange={this.handleFieldChange}
                        type="text"
                        id="profileListSwarm"
                        value={this.state.profileListSwarm}>
                        <option value="" placeholder="Select an Answer">Select an Answer:</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    <label htmlFor="profileListPollinate">Would you like to be included on a "Pollination List", to help the public identify Beekeepers availavble for Pollination Services?:<br />
                        <i>*Your name, county and telephone number(s) will be made available to the public for the purpose of removing swarms.</i></label>
                    <select
                        onChange={this.handleFieldChange}
                        type="text"
                        id="profileListPollinate"
                        value={this.state.profileListPollinate}>
                        <option value="" placeholder="Select an Answer">Select an Answer:</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    <label htmlFor="profileKeepBees"><b>*</b>Are You Still Keeping Bees?:<br />
                        <i>If you are no longer keeping bees, select "No" and we will remove you from our mailing list.</i></label>
                    <select
                        onChange={this.handleFieldChange}
                        type="text"
                        id="profileKeepBees"
                        value={this.state.profileKeepBees}>
                        <option value="" placeholder="Select an Answer">Select an Answer:</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    <br />
                    <br />
                    <br />

                    <button
                        type="submit"
                        onClick={this.updateProfile}
                        className="btn btn-success"
                    >
                        Save Changes
                </button>
                </form>
            </React.Fragment >
        );
    }
}