import React, { Component } from "react";
import { Link } from "react-router-dom";
import './apregs.css';
import { Pie } from 'react-chartjs-2';

export default class ApregCard extends Component {
  render() {
    var moment = require('moment');
    var reportDate = moment(this.props.apreg.timestamp).format("YYYY-MM-DD") 
      const data = {
          labels: [
              'Mites',
              'Queen Failure',
              'Starvation',
              'Other'
          ],
          datasets: [{
              data: [this.props.apreg.lossesMites, this.props.apreg.lossesQueenFailure, this.props.apreg.lossesStarvation, this.props.apreg.lossesOther],
              backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#FFA500'
              ],
              hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#FFA500'
              ]
          }]
      };
      
      const options = {
          maintainAspectRatio: false,
          responsive: false,
          legend: {
              position: 'left',
              labels: {
                  boxWidth: 10
              }
          }
      }

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
            <b>Hive Loss Causation:</b>
            <div style={{ height: 'auto', width: 'auto', backgroundColor: 'white', position: 'relative' }}>
                    <Pie data={data} height={150} width={200} options={options} />
                </div>

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