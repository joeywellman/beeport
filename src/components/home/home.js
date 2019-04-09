import React, { Component } from "react";
import Beeport from "../authentication/Beeport.jpg"
import BeeWV from "./BeeWV.jpg"
import './home.css';


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="padded-header">
                    <div className="text-center">
                        <h1 className="header-text">Welcome to <a href="http://localhost:3000/apregs"><img src={Beeport} alt="Beeport Logo" height="12.5%" width="12.5%"></img></a>!</h1><br />
                        <a href="http://localhost:3000/apregs"><img className="" src={BeeWV} alt="Beeport Logo" height="35%" width="35%"></img></a><br /><br />
                        <p className="text-justify">To unlock all of the features <b>Beeport</b> has to offer to state Beekeepers,<br />
                            please <a href="http://localhost:3000/" rel="noopener noreferrer" alt="Link to Sign In">Sign In</a> to <a href="http://localhost:3000/" rel="noopener noreferrer" alt="Sign In to Your Account">Your Account</a> or <a href="http://localhost:3000/register" rel="noopener noreferrer" alt="Link to Registration">Register</a> as a New Application User.</p><br />
                        <p className="text-justify">If you are a member of the public or WV organization looking for <a href="http://localhost:3000/pollinate" target="_blank" rel="noopener noreferrer" alt="Link to Pollination Service Contacts">Pollination Services</a> or <a href="http://localhost:3000/swarm" target="_blank" rel="noopener noreferrer" alt="Link to Swarm List Contacts">Swarm Mitigation</a>,<br /> please follow the applicable links — located within in the Navigation Bar  (and then select Your WV County).</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}