import React, { Component } from "react";
import apregAPIManager from "./apregsAPIManager";
import './apregs.css'


export default class ApregEditForm extends Component {
  // Set Initial State:
  state = {
    apregTimestamp: "",
    apregReportName: "",
    apregReportYear: "",
    apregTotalColonies: "",
    apregTotalApiaries: "",
    apregLossesSummer: "",
    apregLossesWinter: "",
    apregLossesMites: "",
    apregLossesQueenFailure: "",
    apregLossesStarvation: "",
    apregOtherLosses: "",
    apregIncreasesSplits: "",
    apregIncreasesPackages: "",
    apregIncreasesNucs: "",
    apregIncreasesSwarms: "",
    apregInspectionInterstate: "",
    apregInspectionDistribute: "",
    apregInspectionNewBeek: "",
    apregApplicationDate: "",
    apregApplicationSignature: "",
    apregAppBestPracticesConfirmation: "",
    apregAppBestPracticesSignature: "",
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
    if (this.state.apregReportName === "") {
      window.alert("Please give your report a unique identifier, to help you track your application completions.");
    } else if (this.state.apregReportYear === "") {
      window.alert("Please enter the year you are registering the report.");
    } else if (this.state.apregTotalColonies === "") {
      window.alert("Please enter your total number of colonies.");
    } else if (this.state.apregTotalApiaries === "") {
      window.alert("Please choose the number of apiaries you operate.");
    } else if (this.state.apregLossesSummer === "") {
      window.alert("Please enter the number of colonies you lost, during the summer.");
    } else if (this.state.apregLossesWinter === "") {
      window.alert("Please enter the number of colonies you lost, during the winter.");
    } else if (this.state.apregLossesMites === "") {
      window.alert("Please enter number of colonies you lost to mites.");
    } else if (this.state.apregLossesQueenFailure === "") {
      window.alert("Please enter number of colonies you lost, due to queen failure.");
    } else if (this.state.apregLossesStarvation === "") {
      window.alert("Please enter number of colonies you lost to starvation.");
    } else if (this.state.apregOtherLosses === "") {
      window.alert("Please enter number of colonies you lost, due to other causes.");
    } else if (this.state.apregIncreasesSplits === "") {
      window.alert("Please enter number of colonies you added, from making splits.");
    } else if (this.state.apregIncreasesPackages === "") {
      window.alert("Please enter number of colonies you added, due to acquiring packages.");
    } else if (this.state.apregIncreasesNucs === "") {
      window.alert("Please enter number of colonies you added, due to the acquisition of nucs.");
    } else if (this.state.apregIncreasesSwarms === "") {
      window.alert("Please enter number of colonies you lost, due to acquiring swarms.");
    } else if (this.state.apregInspectionInterstate === "") {
      window.alert("Would you like to request an inspection for interstate movement of honeybees?");
    } else if (this.state.apregInspectionDistribute === "") {
      window.alert("Would you like to request an inspection for distribution of honeybees?");
    } else if (this.state.apregInspectionNewBeek === "") {
      window.alert("Are you a new beekeeper?");
    } else if (this.state.apregApplicationDate === "") {
      window.alert("Please select your date of application.");
    } else if (this.state.apregApplicationSignature === "") {
      window.alert("Please provide your electronic signature.");
    } else {
      var dt = new Date();
      var moment = require('moment');
      var apregTimestamp = moment(dt).format("YYYY-MM-DD HH:mm:ss")
      const editedApreg = {
        id: this.props.match.params.apregId,
        timestamp: apregTimestamp,
        reportName: this.state.apregReportName,
        reportYear: this.state.apregReportYear,
        totalColonies: this.state.apregTotalColonies,
        totalApiaries: this.state.apregTotalApiaries,
        lossesSummer: this.state.apregLossesSummer,
        lossesWinter: this.state.apregLossesWinter,
        lossesMites: this.state.apregLossesMites,
        lossesQueenFailure: this.state.apregLossesQueenFailure,
        lossesStarvation: this.state.apregLossesStarvation,
        lossesOther: this.state.apregOtherLosses,
        increasesSplits: this.state.apregIncreasesSplits,
        increasesPackages: this.state.apregIncreasesPackages,
        increasesNucs: this.state.apregIncreasesNucs,
        increasesSwarms: this.state.apregIncreasesSwarms,
        inspectionInterstate: this.state.apregInspectionInterstate,
        inspectionDistribute: this.state.apregInspectionDistribute,
        inspectionNewBeek: this.state.apregInspectionNewBeek,
        applicationDate: this.state.apregApplicationDate,
        applicationSignature: this.state.apregApplicationSignature,
        appBestPracticesConfirmation: this.state.apregAppBestPracticesConfirmation,
        appBestPracticesSignature: this.state.apregAppBestPracticesSignature,
        userId: parseInt(sessionStorage.getItem("userId"))
      };

      this.props.updateApreg(editedApreg)
        .then(() => this.props.history.push("/apregs"));
    }
  };

  componentDidMount() {
    apregAPIManager.getSingleApreg(this.props.match.params.apregId).then(apreg => {
      this.setState({
        apregTimestamp: apreg.timestamp,
        apregReportName: apreg.reportName,
        apregReportYear: apreg.reportYear,
        apregTotalColonies: apreg.totalColonies,
        apregTotalApiaries: apreg.totalApiaries,
        apregLossesSummer: apreg.lossesSummer,
        apregLossesWinter: apreg.lossesWinter,
        apregLossesMites: apreg.lossesMites,
        apregLossesQueenFailure: apreg.lossesQueenFailure,
        apregLossesStarvation: apreg.lossesStarvation,
        apregOtherLosses: apreg.lossesOther,
        apregIncreasesSplits: apreg.increasesSplits,
        apregIncreasesPackages: apreg.increasesPackages,
        apregIncreasesNucs: apreg.increasesNucs,
        apregIncreasesSwarms: apreg.increasesSwarms,
        apregInspectionInterstate: apreg.inspectionInterstate,
        apregInspectionDistribute: apreg.inspectionDistribute,
        apregInspectionNewBeek: apreg.inspectionNewBeek,
        apregApplicationDate: apreg.applicationDate,
        apregApplicationSignature: apreg.applicationSignature,
        apregAppBestPracticesConfirmation: apreg.appBestPracticesConfirmation,
        apregAppBestPracticesSignature: apreg.appBestPracticesSignature
      });
      console.log(apreg)
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="apregsEditForm">
          <div className="form-group">
            <h2 className="text-center">Annual Application for Apiary Registration</h2>
            <h5 className="text-center">As required by Code of West Virginia, Chapter 19, Article 13</h5>
          </div>
          <div className="form-group">
            <label htmlFor="form-header"><b>Name Your Report:</b>
              <br />(To help track your completions)</label>
            <br />
            <label htmlFor="apregReportName">Report Name / ID:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregReportName"
              placeholder="My 2019 Annual Application for Apiary Registration"
              value={this.state.apregReportName}
            />
            <label htmlFor="apregReportYear">Report Year:</label>
            <select
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregReportYear"
              value={this.state.apregReportYear}>
              <option value="" placeholder="Select an Answer">Select a Year:</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="form-header"><b>Number of Hives and Locations at Time of Application:</b></label>
            <br />
            <label htmlFor="apregTotalColonies">Total Number of Colonies:</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregTotalColonies"
              placeholder="Number of Colonies"
              value={this.state.apregTotalColonies}
            />
            <label htmlFor="apregTotalApiaries">Total Number of Apiaries:</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregTotalApiaries"
              placeholder="Number of Apiaries"
              value={this.state.apregTotalApiaries}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-header"><b>Number of Colonies Lost During:</b></label>
            <br />
            <label htmlFor="apregLossesSummer">Summer</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregLossesSummer"
              placeholder="Number of Colonies Lost during Summer"
              value={this.state.apregLossesSummer}
            />
            <label htmlFor="apregLossesWinter">Winter</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregLossesWinter"
              placeholder="Number of Colonies Lost during Winter"
              value={this.state.apregLossesWinter}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-header"><b>What Caused Losses?:</b>
              <br />(Enter number of colonies in box.)</label>
            <br />
            <label htmlFor="apregLossesMites">Mites</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregLossesMites"
              placeholder="Number of Colonies Lost to Mites"
              value={this.state.apregLossesMites}
            />
            <label htmlFor="apregLossesQueenFailure">Queen Failure</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregLossesQueenFailure"
              placeholder="Number of Colonies Lost to Queen Failure(s)"
              value={this.state.apregLossesQueenFailure}
            />
            <label htmlFor="apregLossesStarvation">Starvation</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregLossesStarvation"
              placeholder="Number of Colonies Lost to Starvation"
              value={this.state.apregLossesStarvation}
            />
            <label htmlFor="apregOtherLosses">Other</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregOtherLosses"
              placeholder="Number of Colonies Lost to Other Issues"
              value={this.state.apregOtherLosses}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-header"><b>Number of Increases</b> (<i>if any</i>) <b>in Colonies:</b></label>
            <br />
            <label htmlFor="apregIncreasesSplits">Splits</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregIncreasesSplits"
              placeholder="Number of Colony Increases from Splits"
              value={this.state.apregIncreasesSplits}
            />
            <label htmlFor="apregIncreasesPackages">Packages</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregIncreasesPackages"
              placeholder="Number of Colony Increases from Packages"
              value={this.state.apregIncreasesPackages}
            />
            <label htmlFor="apregIncreasesNucs">Nuc's</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregIncreasesNucs"
              placeholder="Number of Colony Increases from Nuc's"
              value={this.state.apregIncreasesNucs}
            />
            <label htmlFor="apregIncreasesSwarms">Swarms</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregIncreasesSwarms"
              placeholder="Number of Colony Increases from Swarm Captures"
              value={this.state.apregIncreasesSwarms}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-header"><b>Request an Inspection for:</b></label>
            <br />
            <label htmlFor="apregInspectionInterstate">Interstate Movement of Honeybees</label>
            <select
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregInspectionInterstate"
              value={this.state.apregInspectionInterstate}>
              <option value="" placeholder="Select an Answer">Select an Answer:</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label htmlFor="apregInspectionDistribute">Distribution of Bees or Queens</label>
            <select
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregInspectionDistribute"
              value={this.state.apregInspectionDistribute}>
              <option value="" placeholder="Select an Answer">Select an Answer:</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label htmlFor="apregInspectionNewBeek">I am a New Beekeeper</label>
            <select
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregInspectionNewBeek"
              value={this.state.apregInspectionNewBeek}>
              <option value="" placeholder="Select an Answer">Select an Answer:</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="form-header"><b>Acknowledgement and Certification of Understanding:</b></label>
            <br />
            <p><b>Assistance Available:</b>  At any time, beekeepers needing assistance or having detected diseases or pest invasion, can call WVDA staff (ames and numbers <i>listed above</i>) for inspection/assistance. The WVDA is committed to maintaining and promoting healthy colonies in West Virginia for honey production, the sale of bees, and pollination.</p>
            <p><b>Electronic Signature:</b>  This Acknowledgement and Certification of Understanding
            ("Acknowledgement") is to let you know that by submitting an electronic signature, you are
            providing an electronic mark, that is held to the same standard as a legally-binding equivalent of
            a handwritten signature provided by you. For purposes of the acknowledgement, a digital mark
            is considered a typed legal First and Last name (legal name may include middle name, initial or
            suffix) followed by the typed date. Any document requiring an electronic signature may contain
                        a signature acknowledgment statement provided in the same area requiring the electronic signature.</p>
            <label htmlFor="apregApplicationSignature">Signature (<i>Type your full name.</i>):</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregApplicationSignature"
              placeholder="Joseph P . Wellman"
              value={this.state.apregApplicationSignature}
            />
            <label htmlFor="apregApplicationDate">Date (<i>MM/DD/YYYY</i>):</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregApplicationDate"
              placeholder="MM/DD/YYYY"
              value={this.state.apregApplicationDate}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="form-header"><i><b>Honeybee Best Management Practices</b>
              <br />(This section is voluntary.)</i></label>
            <br />
            <p> I have read the "West Virginia Honey Bee Best Management Practices" as written in §61-2-4, Limits on
                Liability, and will adhere to this Voluntary program. For additional information regarding this program
                            visit the WVDA webpage, then Divisions/Plant Industries/Apiary and follow the applicable hyperlink.</p>
            <label htmlFor="apregAppBestPracticesConfirmation">Would you like to participate?:</label>
            <select
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregAppBestPracticesConfirmation"
              value={this.state.apregAppBestPracticesConfirmation}>
              <option value="" placeholder="Select an Answer">Select an Answer:</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label htmlFor="apregAppBestPracticesSignature">Signature (<i>Type your full name.</i>):</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="apregAppBestPracticesSignature"
              placeholder="Joseph P . Wellman"
              value={this.state.apregAppBestPracticesSignature}
            />
          </div>
          <br />
          <input
            type="hidden"
            required
            className="form-control"
            // onChange={this.handleFieldChange}
            id="userId"
            value={this.state.userId}
          />
          <button
            type="submit"
            onClick={this.updateApreg}
            className="btn btn-success"
          >
            Save Changes
                </button>
        </form>
      </React.Fragment >
    );
  }
}