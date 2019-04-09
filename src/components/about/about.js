import React, { Component } from "react";
import './about.css';
import Beeport from "../authentication/Beeport.jpg"


export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>About <a href="http://localhost:3000/apregs"><img src={Beeport} alt="Beeport Logo" height="10%" width="10%"></img></a></h2>
                <div className="text-center">
                    This is the About Page Placeholder
                </div>
            </React.Fragment>
        );
    }
}