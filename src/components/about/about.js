import React, { Component } from "react";
import './about.css';
import Beeport from "../authentication/Beeport.jpg"
// import BeeWV from "../home/BeeWV.jpg"


export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="header-text"><a href="http://localhost:3000/home"><img src={Beeport} alt="Beeport Logo" height="20%" width="20%"></img></a><br />
                    About the Application</h2>
                <br />
                <div className="about-h3">
                    <h3 className="black-text"><a href="http://localhost:3000/home"><img src={Beeport} alt="Beeport Logo" height="10%" width="10%"></img></a>: A Tool for Saving State Honey Bee Populations</h3>
                    <br />
                    <div className="text-justify">
                        <h4 className="">Summary</h4> <br />
                        <p className="about-h3">
                            <b>Beeport</b> is designed as a tool to assist with the identification of issues and risk factors plaguing West Virginia honey bee populations.
                              Its framework utilizes online portals and comprehensive surveys to collect hive health indicators from beekeepers (users) across the state.
                              When users submit reports, the app can immediately generate, populate, and [has the potential to] conveniently route electronic apiary registration applications directly to the WVDA’s registrar – fulfilling annual legal obligation(s) that beekeepers have to report hive details.
                              In addition to handling mandatory documentation, the app can also automate the quantitative evaluation of cumulative data submitted and shares objective findings in the form of Colony Loss Analyses (CLAs).
                        </p>
                        <br />
                        <br />
                        <h4 className="bold">Overview of Application</h4> <br />
                        <p className="about-h3">
                            The <b>Beeport App</b> (web application) compiles hive data from West Virginia beekeeper surveys, identifies what factors are affecting state honey bee populations and yields a better understanding of how West Virginians can maintain healthier colonies.
                              Gathering and sharing information plays a vital role in educating apiarists, and also serves to stimulate growing agricultural economies.
                              In order to both support the West Virginia Department of Agriculture (WVDA) and assist apiculturists with report completion(s), questionnaire components meet and/or exceed fieldset entry requirements mandated by the WVDA's obligatory "Annual Application for Apiary Registration".
                              Using this type of approach will prove to save a great deal of time, materials, and money.<br /><br />
                            Process: Beekeepers generate a login, populate approximately 40 data points, and submit forms.  Login and form selections are interconnected, ensuring responses are current and promoting simplification.  It is important that Beeport is not simply a client-server computer program and hive management implement, that <i>only</i> has people submit colony health indicators into a database gateway...  As opposed to datum entering a black hole, the archival material is calculated, tracked, trended, and shared with app users.  Participants receive statistical explanations, extrapolated from pooled submissions, and are provided quantitative reports – driven strictly by comprehensive and objective figures.  This methodology establishes a positive feedback loop, by incentivizing contributions, and intelligence collection serves as a valuable learning tool - for both application users and multiple [WV] state organizations.
                        </p>
                    </div>
                    <br /><br /><br />
                </div>
            </React.Fragment>
        );
    }
}