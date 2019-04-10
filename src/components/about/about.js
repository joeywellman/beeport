import React, { Component } from "react";
import './about.css';
import Beeport from "../authentication/Beeport.jpg"
import BeeWV from "../home/BeeWV.jpg"


export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="header-text">About <a href="http://localhost:3000/apregs"><img src={Beeport} alt="Beeport Logo" height="10%" width="10%"></img></a></h2>
                <div className="text-center">
                {/* <a href="http://localhost:3000/apregs"><img className="" src={BeeWV} alt="Beeport Logo" height="35%" width="35%"></img></a><br /><br /> */}
                    This is the About Page Placeholder
                </div>
            </React.Fragment>
        );
    }
}