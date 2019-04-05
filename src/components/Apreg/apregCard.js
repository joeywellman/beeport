import React, { Component } from "react";
import { Link } from "react-router-dom";
import './apregs.css';
import { Pie } from 'react-chartjs-2';


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

const Selection = (props) => (
  <select id="selection" onChange={props.handleOnChange}>
    <option value="dataLossCausation">Causation</option>
    <option value="dataSeasonalLossRatio">Season</option>
    {/* <option value="dataHiveIncreases">Hive Increases by Type</option> */}
  </select>
);
export default class ApregCard extends Component {

  constructor(props) {

    super(props);
    const dataLossCausation = {

      labels: [
        'Mites',
        'Queen Failure',
        'Starvation',
        'Other'
      ],
      datasets: [{

        data: [
          this.props.apreg.lossesMites,
          this.props.apreg.lossesQueenFailure,
          this.props.apreg.lossesStarvation,
          this.props.apreg.lossesOther
        ],

        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFD700',
          '#FFA500'
        ],

        hoverBackgroundColor: [
          '#DC143C',
          '#0000FF',
          '#FFFF00',
          '#FF4500'
        ]
      }]
    }
    // const dataSeasonalLossRatio = {

    //   labels: [
    //     'Summer',
    //     'Winter'
    //   ],
    //   datasets: [{
    //     data: [
    //       this.props.apreg.lossesSummer,
    //       this.props.apreg.lossesWinter
    //     ],

    //     backgroundColor: [
    //       '#FF6384',
    //       '#36A2EB'
    //     ],

    //     hoverBackgroundColor: [
    //       '#DC143C',
    //       '#0000FF'
    //     ]
    //   }]
    // }
    // const dataHiveIncreases = {

    //   labels: [
    //     'Splits',
    //     'Packages',
    //     'Nucs',
    //     'Swarms'
    //   ],
    //   datasets: [{

    //     data: [
    //       this.props.apreg.increasesSplits,
    //       this.props.apreg.increasesPackages,
    //       this.props.apreg.increasesNucs,
    //       this.props.apreg.increasesSwarms
    //     ],

    //     backgroundColor: [
    //       '#FF6384',
    //       '#36A2EB',
    //       '#FFD700',
    //       '#FFA500'
    //     ],

    //     hoverBackgroundColor: [
    //       '#DC143C',
    //       '#0000FF',
    //       '#FFFF00',
    //       '#FF4500'
    //     ]
    //   }]
    // }
    // const selection = dataLossCausation | dataSeasonalLossRatio | dataHiveIncreases;
    this.state = {
      chartData: dataLossCausation,
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // Toggle between chart1 and chart2 based on value of updated:
  handleUpdate(evt) {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    const dataLossCausation = {

      labels: [
        'Mites',
        'Queen Failure',
        'Starvation',
        'Other'
      ],
      datasets: [{

        data: [
          this.props.apreg.lossesMites,
          this.props.apreg.lossesQueenFailure,
          this.props.apreg.lossesStarvation,
          this.props.apreg.lossesOther
        ],

        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFD700',
          '#FFA500'
        ],

        hoverBackgroundColor: [
          '#DC143C',
          '#0000FF',
          '#FFFF00',
          '#FF4500'
        ]
      }]
    }
    const dataSeasonalLossRatio = {

      labels: [
        'Summer',
        'Winter'
      ],
      datasets: [{
        data: [
          this.props.apreg.lossesSummer,
          this.props.apreg.lossesWinter
        ],

        backgroundColor: [
          '#FF6384',
          '#36A2EB'
        ],

        hoverBackgroundColor: [
          '#DC143C',
          '#0000FF'
        ]
      }]
    }
    // const dataHiveIncreases = {

    //   labels: [
    //     'Splits',
    //     'Packages',
    //     'Nucs',
    //     'Swarms'
    //   ],
    //   datasets: [{

    //     data: [
    //       this.props.apreg.increasesSplits,
    //       this.props.apreg.increasesPackages,
    //       this.props.apreg.increasesNucs,
    //       this.props.apreg.increasesSwarms
    //     ],

    //     backgroundColor: [
    //       '#FF6384',
    //       '#36A2EB',
    //       '#FFD700',
    //       '#FFA500'
    //     ],

    //     hoverBackgroundColor: [
    //       '#DC143C',
    //       '#0000FF',
    //       '#FFFF00',
    //       '#FF4500'
    //     ]
    //   }]
    // }
    const chartData = this.state.value ? dataLossCausation : dataSeasonalLossRatio;

    // Batching both updates to state in the same call to this.setState:

    this.setState({ chartData, value: !this.state.value });

    // For updated, read from what is currently set as updated in state and do the opposite - creating a toggle:
  }

  render() {
    var moment = require('moment');
    var reportDate = moment(this.props.apreg.timestamp).format("YYYY-MM-DD")

    return (
      <div key={this.props.apreg.id} className="card">
        <div className="card-body">
          <h6 className="card-title">
            <p><b>Report Name:</b>
              <br />{this.props.apreg.reportName}</p>
            <p><b>Report Year:</b>
              <br />{this.props.apreg.reportYear}</p>
            <p className="small"><b>Report Date:</b>
              <br />{reportDate}</p>
            <p className="small"><b># of Colonies:</b> {this.props.apreg.totalColonies}</p>
            <p className="small"><b># of Apiaries:</b> {this.props.apreg.totalApiaries}</p>
            <br />
            <b>Hive Loss Report by:</b>
            <br />
            <div>
              <Selection handleOnChange={this.handleUpdate} />
            </div>
            <br />
            <div>
              <Pie data={this.state.chartData} options={options} width={200} height={200} />
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
          </h6>
        </div>
      </div>
    );
  }
}