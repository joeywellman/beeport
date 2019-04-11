import React, { Component } from "react";
import './pollinate.css';
import Beeport from "../authentication/Beeport.jpg"
import GoogleMaps from "simple-react-google-maps"


export default class Pollinate extends Component {
    // Set Initial State:
    state = {
        selectedCounty: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <section className="allUsers">
                <h2 className="header-text"><a href="http://localhost:3000/home"><img src={Beeport} alt="Beeport Logo" height="20%" width="20%"></img></a><br />
                    Pollination Services</h2><br />
                <label className="sub-head" htmlFor="selectedCounty"><b>Find Beekeeper:</b></label>
                <select
                    onChange={this.handleFieldChange}
                    id="selectedCounty"
                    value={this.state.selectedCounty}
                >
                    <option value="Choose County">(by County)</option>
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
                <br />
                <div>
                    {this.props.allUsers.filter(usr => usr.listPollinate === "Yes" & usr.locationCounty === this.state.selectedCounty).map(allUser => (
                        <div className="" key={allUser.id}>
                            <h6><b><u>{allUser.nameFirst} {allUser.nameLast}</u></b></h6>
                            {/* <h6><b><u>Contact #{allUser.id}</u></b></h6> */}
                            <div className="row justify-content-md-center">
                                <p className="text-justify">
                                    {/* <b>Name:</b> {allUser.nameFirst} {allUser.nameLast}<br /> */}
                                    <b>County:</b> {allUser.locationCounty}<br />
                                    <b>Home #:</b> {allUser.telHome}<br />
                                    <b>Cell #:</b> {allUser.telCell}<br />
                                </p>
                            </div>
                            <br />
                        </div>
                    ))}
                    <i>This concludes your search results.<br />
                        For contacts, please select a county.</i>
                    <br />
                </div>
                <br />
                <br />
                <label className="sub-head" htmlFor="selectedCounty"><b>Locations Where Pollination Services are Available:</b></label>
                <div className="center-map">
                    <GoogleMaps
                        apiKey={"AIzaSyCPHYGRAhSs5Fb4QAFeWNI6jHjpt0pQKeY"}
                        style={{ height: '500px', width: '500px' }}
                        mapElement={<div style={{ height: `100%` }} />}
                        zoom={7}
                        center={{ lat: 38.99, lng: -80.25 }}
                        markers={
                            [
                                { lat: 38.4135892, lng: -82.5575993 },
                                { lat: 38.4135892, lng: -82.5575993 },
                                { lat: 38.4135892, lng: -82.5575993 },
                                { lat: 39.1252758, lng: -80.2981782 },
                                { lat: 39.1252758, lng: -80.2981782 },
                                { lat: 39.4886, lng: -78.0652 },
                            ]

                        }
                    />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
            </section >
        );
    }
}