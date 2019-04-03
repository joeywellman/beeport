import React, { Component } from "react";
import { Link } from "react-router-dom";
import './apregs.css';

export default class ApregCard extends Component {
  render() {
    var moment = require('moment');
    var reportDate = moment(this.props.apreg.timestamp).format("YYYY-MM-DD")
    return (
      <div key={this.props.apreg.id} className="card">
        <div className="card-body">
          <h5 className="card-title">

            <p><b>Report Name:</b>
            <br />{this.props.apreg.reportName}</p>
            <p><b>Report Year:</b>
            <br />{this.props.apreg.reportYear}</p>
            <p><b>Report Date:</b>
            <br />{reportDate}</p>
            <br></br>
            <p><b># of Colonies:</b> {this.props.apreg.totalColonies}</p>
            <p><b># of Apiaries:</b> {this.props.apreg.totalApiaries}</p>

            <Link className="btn btn-info" to={`/apregs/${this.props.apreg.id}/edit`}>
              Edit Form
            </Link>
            <br />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteApreg(this.props.apreg.id)
                  .then(() => this.props.history.push("/apregs")
                  )
              }}>

              Delete Form
            </button>

          </h5>
        </div>
      </div>
    );
  }
}