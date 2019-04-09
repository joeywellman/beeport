import React, { Component } from "react";
import './resource.css';
import Beeport from "../authentication/Beeport.jpg"


export default class Resource extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="header-text"><a href="http://localhost:3000/apregs"><img src={Beeport} alt="Beeport Logo" height="10%" width="10%"></img></a> Resources</h2>
                <div className="text-center">
                    This is the Resources Page Placeholder
                </div>
            </React.Fragment>
        );
    }
}