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
                <div className="about-h3">
                    <h3 className="black-text"><a href="http://localhost:3000/home"><img src={Beeport} alt="Beeport Logo" height="22.5%" width="22.5%"></img></a> Contacts:</h3>
                    <br />
                    <div className="text-justify">
                        <h4 className="bold">WVDA Staff Contacts:</h4>
                        <p className="about-h3">
                        </p>
                        <h4 className="bold">Associations/Organizations:</h4>
                        <p className="about-h3">
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}