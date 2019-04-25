import React, { Component } from "react";
import './resource.css';
import Beeport from "../authentication/Beeport.jpg"


export default class Resource extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="header-text"><a href="http://localhost:3000/home"><img src={Beeport} alt="Beeport Logo" height="19.75%" width="19.75%"></img></a><br />
                    Information / Resources</h2>
                <br />
                <div className="about-h3 container-center">
                    <div className="row info-margins-3">
                        <div className="col">
                            <h3 className="black-text"><a href="http://localhost:3000/home"><img src={Beeport} alt="Beeport Logo" height="22.5%" width="22.5%"></img></a> Contacts:</h3>
                            <p></p>
                            <div><b>Joey Wellman</b>, <i>Application Manager</i><br />
                                443-956-7233<br />
                                <a href="honeybeeport@gmail.com" className="small-font">honeybeeport@gmail.com</a>
                            </div>
                            <br />
                            <br />
                            <div className="text-justify">
                                <h4 className="bold black-text">WVDA Staff Contacts:</h4>
                                <p></p>
                                <div><b>Wade Stiltner</b>, <i>State Apiarist</i><br />
                                    304-550-0589<br />
                                    <a href="wstiltner@wvda.us" className="small-font">wstiltner@wvda.us</a>
                                </div>
                                <p></p>
                                <div><b>Rebecca Moretto</b>, <i>Apiary Specialist</i><br />
                                    304-257-8919<br />
                                    <a href="rmoretto@wvda.us " className="small-font">rmoretto@wvda.us </a>
                                </div>
                            </div>
                            <br />
                            <br />
                            <h4 className="bold black-text">American Beekeeping Federation:</h4>
                            <p></p>
                            <div><b>Contact Information</b><br />
                                404-760-2875<br />
                                <a href="info@abfnet.org " className="small-font">info@abfnet.org </a>
                            </div>
                            <p></p>
                            <div><b>Beekeeping Links</b><br />
                                <a href="https://www.abfnet.org/page/15" className="small-font">Helpful Information for Beekeepers</a>
                            </div>
                            <br />
                            <br />
                        </div>
                        <div className="col">
                            <h4 className="bold black-text">West Virginia Beekeepers Association (WVBA):</h4>
                            <p></p>
                            <div><b>Local Associations - Map</b><br />
                                <i>Below</i> is a Map of Local Beekeeping Organizations that are WVBA Affiliates.<br />
                                <p></p>
                                <iframe title="Local Associations - Map" src="https://www.google.com/maps/d/embed?mid=1orrBAM4NMzNSKQXDuAOdN6Km1a4" width="530" height="500"></iframe>
                            </div>
                        </div>
                        <br />
                    </div>
                    <br /><br />
                </div>
                <br /><br />
            </React.Fragment>
        );
    }
}