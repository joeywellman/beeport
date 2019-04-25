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
                        <h1 className="header-text"><a href="http://localhost:3000/home"><img src={Beeport} alt="Beeport Logo" height="20%" width="20%"></img></a><br />
                            Welcome to the App!<br /><br />
                            <a href="http://localhost:3000/apregs"><img className="" src={BeeWV} alt="Beeport Logo" height="37%" width="37%"></img></a><br /><br />
                            Become a Member</h1><br />
                        <p className=""><a href="http://localhost:3000/register" rel="noopener noreferrer" alt="Link to Register"><b>Join the Team!</b></a></p>
                        <p className="text-justify"><b className="underline">Beeport</b> is designed to assist with the identification of issues and risk factors plaguing West Virginia honey bee populations.<br />
                            Its framework utilizes online portals and comprehensive surveys to collect hive health indicators from beekeepers (users) across the state.<br />
                            When users submit reports, the app can immediately generate, populate, and conveniently route electronic apiary registration applications directly<br />
                            to the WVDA’s registrar – fulfilling annual legal obligation(s) that beekeepers have to report hive details. In addition to handling mandatory documentation,<br />
                            the app can also automate quantitative evaluations of cumulative data submitted and shares objective findings in the form of <b>Colony Loss Analyses</b> (<b>CLAs</b>).<br />
                            <br /><br />
                            To unlock all of the features Beeport has to offer to state Beekeepers,<br />
                            please <a href="http://localhost:3000/" rel="noopener noreferrer" alt="Link to Sign In"><b>Sign In</b></a> to <a href="http://localhost:3000/" rel="noopener noreferrer" alt="Sign In to Your Account">Your Account</a> or <a href="http://localhost:3000/register" rel="noopener noreferrer" alt="Link to Registration"><b>Register</b></a> <i>as a New Application User</i>.</p>
                        <p className="text-justify">If you are a member of the public or WV organization looking for <a href="http://localhost:3000/pollinate" target="_blank" rel="noopener noreferrer" alt="Link to Pollination Service Contacts">Pollination Services</a> or <a href="http://localhost:3000/swarm" target="_blank" rel="noopener noreferrer" alt="Link to Swarm List Contacts">Swarm Mitigation</a>,<br /> please follow the applicable links — located within in the Navigation Bar  (and then select Your WV County).</p>
                    </div>
                    <br /><br /><br />
                </div>
            </React.Fragment>
        );
    }
}