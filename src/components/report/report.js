import React, { Component } from "react";
// import apregAPIManager from "../Apreg/apregsAPIManager";
import './report.css';
// import { Pie } from 'react-chartjs-2';
import ReactChartkick, { PieChart } from 'react-chartkick'
import axios from "axios";
import Chart from 'chart.js'
import CountUp from 'react-countup';


ReactChartkick.addAdapter(Chart)

export default class Report extends Component {
    constructor() {
        super();
        this.state = {
            summationFormNumber: "",
            summationTotalColonies: "",
            summationTotalApiaries: "",
            summationLossesMites: "",
            summationLossesQueenFailure: "",
            summationLossesStarvation: "",
            summationLossesOther: "",
            summationLossesSummer: "",
            summationLossesWinter: "",
            summationIncreasesSplits: "",
            summationIncreasesPackages: "",
            summationIncreasesNucs: "",
            summationIncreasesSwarms: "",
            summationUserId: "",
            summationId: "",
            apregFormNumber: "",
            apregTotalColonies: "",
            apregTotalApiaries: "",
            apregLossesMites: "",
            apregLossesQueenFailure: "",
            apregLossesStarvation: "",
            apregLossesOther: "",
            apregLossesSummer: "",
            apregLossesWinter: "",
            apregIncreasesSplits: "",
            apregIncreasesPackages: "",
            apregIncreasesNucs: "",
            apregIncreasesSwarms: "",
            apregUserId: "",
            apregId: "",
            userId: sessionStorage.getItem("userId"),
            isLoading: true,
        };
    }

    componentDidMount() {

        axios
            .get('http://localhost:5002/apregs/')
            .then(({ data }) => {
                var sumColonies = 0;
                var sumApiaries = 0;
                var sumLossesMites = 0;
                var sumLossesQueenFailure = 0;
                var sumLossesStarvation = 0;
                var sumLossesOther = 0;
                var sumLossesSummer = 0;
                var sumLossesWinter = 0;
                var sumIncreasesSplits = 0;
                var sumIncreasesPackages = 0;
                var sumIncreasesNucs = 0;
                var sumIncreasesSwarms = 0;
                var sumFormNumber = 0;
                if (typeof data == 'object') {
                    data.forEach(apreg => {
                        sumColonies += parseFloat(apreg.totalColonies);
                        sumApiaries += parseFloat(apreg.totalApiaries);
                        sumLossesMites += parseFloat(apreg.lossesMites);
                        sumLossesQueenFailure += parseFloat(apreg.lossesQueenFailure);
                        sumLossesStarvation += parseFloat(apreg.lossesStarvation);
                        sumLossesOther += parseFloat(apreg.lossesOther);
                        sumLossesSummer += parseFloat(apreg.lossesSummer);
                        sumLossesWinter += parseFloat(apreg.lossesWinter);
                        sumIncreasesSplits += parseFloat(apreg.increasesSplits);
                        sumIncreasesPackages += parseFloat(apreg.increasesPackages);
                        sumIncreasesNucs += parseFloat(apreg.increasesNucs);
                        sumIncreasesSwarms += parseFloat(apreg.increasesSwarms);
                        sumFormNumber += parseFloat(apreg.formNumber);
                    });
                }
                this.setState({
                    summationTotalColonies: sumColonies,
                    summationTotalApiaries: sumApiaries,
                    summationLossesMites: sumLossesMites,
                    summationLossesQueenFailure: sumLossesQueenFailure,
                    summationLossesStarvation: sumLossesStarvation,
                    summationLossesOther: sumLossesOther,
                    summationLossesSummer: sumLossesSummer,
                    summationLossesWinter: sumLossesWinter,
                    summationIncreasesSplits: sumIncreasesSplits,
                    summationIncreasesPackages: sumIncreasesPackages,
                    summationIncreasesNucs: sumIncreasesNucs,
                    summationIncreasesSwarms: sumIncreasesSwarms,
                    summationFormNumber: sumFormNumber,
                    isLoading: false
                });
                // console.log(sumColonies)
                // console.log(sumApiaries)
            })
            .catch(err => { });

        //     axios
        //         .get('http://localhost:5002/users/')
        //         .then(({ userdata }) => {
        //             var sumUsers = 0;
        //             if (typeof userdata == 'object') {
        //                 userdata.forEach(user => {
        //                     sumUsers += parseFloat(user.id);
        //                 });
        //             }
        //             this.setState({
        //                 id: sumUsers,
        //                 isLoading: false
        //             });
        //         })
        //         .catch(err => { });

        axios
            .get(`http://localhost:5002/apregs/?userId=${parseInt(sessionStorage.getItem("userId"))}`)
            .then(({ data }) => {
                var sumUserColonies = 0;
                var sumUserApiaries = 0;
                var sumUserLossesMites = 0;
                var sumUserLossesQueenFailure = 0;
                var sumUserLossesStarvation = 0;
                var sumUserLossesOther = 0;
                var sumUserLossesSummer = 0;
                var sumUserLossesWinter = 0;
                var sumUserIncreasesSplits = 0;
                var sumUserIncreasesPackages = 0;
                var sumUserIncreasesNucs = 0;
                var sumUserIncreasesSwarms = 0;
                var sumUserFormNumber = 0;
                if (typeof data == 'object') {
                    data.forEach(apreg => {
                        sumUserColonies += parseFloat(apreg.totalColonies);
                        sumUserApiaries += parseFloat(apreg.totalApiaries);
                        sumUserLossesMites += parseFloat(apreg.lossesMites);
                        sumUserLossesQueenFailure += parseFloat(apreg.lossesQueenFailure);
                        sumUserLossesStarvation += parseFloat(apreg.lossesStarvation);
                        sumUserLossesOther += parseFloat(apreg.lossesOther);
                        sumUserLossesSummer += parseFloat(apreg.lossesSummer);
                        sumUserLossesWinter += parseFloat(apreg.lossesWinter);
                        sumUserIncreasesSplits += parseFloat(apreg.increasesSplits);
                        sumUserIncreasesPackages += parseFloat(apreg.increasesPackages);
                        sumUserIncreasesNucs += parseFloat(apreg.increasesNucs);
                        sumUserIncreasesSwarms += parseFloat(apreg.increasesSwarms);
                        sumUserFormNumber += parseFloat(apreg.formNumber);
                    });
                }
                this.setState({
                    apregTotalColonies: sumUserColonies,
                    apregTotalApiaries: sumUserApiaries,
                    apregLossesMites: sumUserLossesMites,
                    apregLossesQueenFailure: sumUserLossesQueenFailure,
                    apregLossesStarvation: sumUserLossesStarvation,
                    apregLossesOther: sumUserLossesOther,
                    apregLossesSummer: sumUserLossesSummer,
                    apregLossesWinter: sumUserLossesWinter,
                    apregIncreasesSplits: sumUserIncreasesSplits,
                    apregIncreasesPackages: sumUserIncreasesPackages,
                    apregIncreasesNucs: sumUserIncreasesNucs,
                    apregIncreasesSwarms: sumUserIncreasesSwarms,
                    apregFormNumber: sumUserFormNumber,
                    isLoading: false
                });
                // console.log(sumColonies)
                // console.log(sumApiaries)
            })
            .catch(err => { });
    }

    render() {
        // const data = {
        //     labels: [
        //         'Test 1',
        //         'Test 2',
        //         'Test 3'
        //     ],
        //     datasets: [{
        //         data: [300, 50, 100],
        //         backgroundColor: [
        //             '#FF6384',
        //             '#36A2EB',
        //             '#FFCE56'
        //         ],
        //         hoverBackgroundColor: [
        //             '#FF6384',
        //             '#36A2EB',
        //             '#FFCE56'
        //         ]
        //     }]
        // };

        // const options = {
        //     maintainAspectRatio: false,
        //     responsive: false,
        //     legend: {
        //         position: 'left',
        //         labels: {
        //             boxWidth: 10
        //         }
        //     }
        // }

        var BeekColoniesPerApiary = ~~(this.state.apregTotalColonies / this.state.apregTotalApiaries);
        var WVColoniesPerApiary = ~~(this.state.summationTotalColonies / this.state.summationTotalApiaries);

        return (
            <React.Fragment>
                <h2 className="header-text">Colony Loss Analyses (CLAs)</h2>
                <br />
                <div className="border container text-center " align="center">
                    <div className="border row">
                        <div className="border col-md-6">
                            <div className="col-auto align-middle">
                                <br />
                                <h3 className="header-text align-middle">Beekeeper CLAs</h3>
                                <br />
                                {/* <p><b>Number of Beekeepers Surveyed:</b><br />
                            {this.state.id}
                        </p> */}
                                <p><b>Number of Beek Reports Submitted:</b><br />
                                    <CountUp
                                        className="total-reports"
                                        start={0}
                                        end={Number(this.state.apregFormNumber)}
                                        duration={3.00}
                                        separator=" "
                                        decimals={0}
                                        decimal=","
                                        prefix=""
                                        suffix=" "
                                    // onEnd={() => console.log('Ended! 👏')}
                                    // onStart={() => console.log('Started! 💨')}
                                    >
                                    </CountUp>
                                </p>
                                <p><b>Number of Beek Apiaries:</b><br />
                                    <CountUp
                                        className="total-apiaries"
                                        start={0}
                                        end={Number(this.state.apregTotalApiaries)}
                                        duration={3.00}
                                        separator=" "
                                        decimals={0}
                                        decimal=","
                                        prefix=""
                                        suffix=" "
                                    // onEnd={() => console.log('Ended! 👏')}
                                    // onStart={() => console.log('Started! 💨')}
                                    >
                                    </CountUp>
                                </p>
                                <p><b>Number of Beek Colonies:</b><br />
                                    <CountUp
                                        className="total-apiaries"
                                        start={0}
                                        end={Number(this.state.apregTotalColonies)}
                                        duration={3.00}
                                        separator=" "
                                        decimals={0}
                                        decimal=","
                                        prefix=""
                                        suffix=" "
                                    // onEnd={() => console.log('Ended! 👏')}
                                    // onStart={() => console.log('Started! 💨')}
                                    >
                                    </CountUp>
                                </p>
                                <p><b>Number of Beek Colonies per Apiary:</b><br />
                                    <CountUp
                                        className="total-colonies-per-apiary"
                                        start={0}
                                        end={Number(BeekColoniesPerApiary)}
                                        duration={3.00}
                                        separator=" "
                                        decimals={0}
                                        decimal=","
                                        prefix=""
                                        suffix=" "
                                    // onEnd={() => console.log('Ended! 👏')}
                                    // onStart={() => console.log('Started! 💨')}
                                    >
                                    </CountUp>
                                    <br />
                                    <br />
                                </p>
                            </div>
                            <hr />
                            <div className="col-auto">
                                <h4 className="">Beek Hive Loss Causation</h4>
                                <br />
                                <div className="align-left">
                                    <PieChart data={[["Mites", this.state.apregLossesMites], ["Queen Failure", this.state.apregLossesQueenFailure], ["Starvation", this.state.apregLossesStarvation], ["Other", this.state.apregLossesOther]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} hoverBackgroundColor={["#DC143C", "#0000FF", "#FFFF00", "#FF4500"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-auto">
                                <h4 className="">Beek Losses by Season</h4>
                                <br />
                                <div>
                                    <PieChart data={[["Summer", this.state.apregLossesSummer], ["Winter", this.state.apregLossesWinter]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-auto">
                                <h4 className="">Beek Increases by Type</h4>
                                <br />
                                <div>
                                    <PieChart data={[["Splits", this.state.apregIncreasesSplits], ["Packages", this.state.apregIncreasesPackages], ["Nucs", this.state.apregIncreasesNucs], ["Swarms", this.state.apregIncreasesSwarms]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                        </div>
                        <div className="border col-md-6">
                            <div className="col-auto align-middle">
                                <br />
                                <h3 className="header-text align-middle">Statewide CLAs</h3>
                                <br />
                                {/* <p><b>Number of Beekeepers Surveyed:</b><br />
                            {this.state.summationId}
                        </p> */}
                                <p><b>Number of WV Reports Received:</b><br />
                                    <CountUp
                                        className="total-reports"
                                        start={0}
                                        end={Number(this.state.summationFormNumber)}
                                        duration={3.00}
                                        separator=" "
                                        decimals={0}
                                        decimal=","
                                        prefix=""
                                        suffix=" "
                                    // onEnd={() => console.log('Ended! 👏')}
                                    // onStart={() => console.log('Started! 💨')}
                                    >
                                    </CountUp>
                                </p>
                                <p><b>Number of WV Apiaries:</b><br />
                                    <CountUp
                                        className="total-apiaries"
                                        start={0}
                                        end={Number(this.state.summationTotalApiaries)}
                                        duration={3.00}
                                        separator=" "
                                        decimals={0}
                                        decimal=","
                                        prefix=""
                                        suffix=" "
                                    // onEnd={() => console.log('Ended! 👏')}
                                    // onStart={() => console.log('Started! 💨')}
                                    >
                                    </CountUp>
                                </p>
                                <p><b>Number of WV Colonies:</b><br />
                                    <CountUp
                                        className="total-apiaries"
                                        start={0}
                                        end={Number(this.state.summationTotalColonies)}
                                        duration={3.00}
                                        separator=" "
                                        decimals={0}
                                        decimal=","
                                        prefix=""
                                        suffix=" "
                                    // onEnd={() => console.log('Ended! 👏')}
                                    // onStart={() => console.log('Started! 💨')}
                                    >
                                    </CountUp></p>
                                <p><b>Number of WV Colonies per Apiary:</b><br />
                                    <CountUp
                                        className="total-colonies-per-apiary"
                                        start={0}
                                        end={Number(WVColoniesPerApiary)}
                                        duration={3.00}
                                        separator=" "
                                        decimals={0}
                                        decimal=","
                                        prefix=""
                                        suffix=" "
                                    // onEnd={() => console.log('Ended! 👏')}
                                    // onStart={() => console.log('Started! 💨')}
                                    >
                                    </CountUp>
                                    <br />
                                    <br />
                                </p>

                            </div>
                            <hr />
                            <div className="col-auto">
                                <h4 className="">WV Hive Loss Causation</h4>
                                <br />
                                <div className="align-left">
                                    <PieChart data={[["Mites", this.state.summationLossesMites], ["Queen Failure", this.state.summationLossesQueenFailure], ["Starvation", this.state.summationLossesStarvation], ["Other", this.state.summationLossesOther]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} hoverBackgroundColor={["#DC143C", "#0000FF", "#FFFF00", "#FF4500"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-auto">
                                <h4 className="">WV Hive Losses by Season</h4>
                                <br />
                                <div>
                                    <PieChart data={[["Summer", this.state.summationLossesSummer], ["Winter", this.state.summationLossesWinter]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-auto">
                                <h4 className="">WV Hive Increases by Type</h4>
                                <br />
                                <div>
                                    <PieChart data={[["Splits", this.state.summationIncreasesSplits], ["Packages", this.state.summationIncreasesPackages], ["Nucs", this.state.summationIncreasesNucs], ["Swarms", this.state.summationIncreasesSwarms]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}