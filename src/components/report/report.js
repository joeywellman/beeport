import React, { Component } from "react";
// import apregAPIManager from "../Apreg/apregsAPIManager";
import './report.css';
import Beeport from "../authentication/Beeport.jpg"
import WVBeek from "./WVBeek.png"
import WVRed from "./WVRed.png"
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
            summationLossesSpring: "",
            summationLossesSummer: "",
            summationLossesFall: "",
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
            apregLossesSpring: "",
            apregLossesSummer: "",
            apregLossesFall: "",
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
                var sumLossesSpring = 0;
                var sumLossesSummer = 0;
                var sumLossesFall = 0;
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
                        sumLossesSpring += parseFloat(apreg.lossesSpring);
                        sumLossesSummer += parseFloat(apreg.lossesSummer);
                        sumLossesFall += parseFloat(apreg.lossesFall);
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
                    summationLossesSpring: sumLossesSpring,
                    summationLossesSummer: sumLossesSummer,
                    summationLossesFall: sumLossesFall,
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
                var sumUserLossesSpring = 0;
                var sumUserLossesSummer = 0;
                var sumUserLossesFall = 0;
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
                        sumUserLossesSpring += parseFloat(apreg.lossesSpring);
                        sumUserLossesSummer += parseFloat(apreg.lossesSummer);
                        sumUserLossesFall += parseFloat(apreg.lossesFall);
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
                    apregLossesSpring: sumUserLossesSpring,
                    apregLossesSummer: sumUserLossesSummer,
                    apregLossesFall: sumUserLossesFall,
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
                <h2 className="header-text"><a href="http://localhost:3000/apregs"><img src={Beeport} alt="Beeport Logo" height="20%" width="20%"></img></a><br />
                Colony Loss Analyses (CLAs)</h2>
                <br />
                <div className="border container text-center " align="center">
                    <div className="border row">
                        <div className="border col-md-6 text-blue">
                            <div className="col-auto align-middle">
                                <br />
                                <h3 className="header-text-beek align-middle"><a className="test" href="http://localhost:3000/apregs"><img src={WVBeek} alt="WV Beek" height="20%" width="20%"></img></a><br />
                                Beekeeper (Beek) CLA</h3>
                                <br />
                                {/* <p><b>Number of Beekeepers Surveyed:</b><br />
                            {this.state.id}
                        </p> */}
                                <p ><b>Number of Beek Reports Submitted:</b><br />
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
                                <p><b>Number of Beek Apiaries (Cumulative):</b><br />
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
                                <p><b>Number of Beek Colonies (Cumulative):</b><br />
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
                                <h4 className="header-text-beek-sub">Beek Hive Loss Causation</h4>
                                <br />
                                <div className="align-left">
                                    <PieChart data={[["Mites", this.state.apregLossesMites], ["Queen Failure", this.state.apregLossesQueenFailure], ["Starvation", this.state.apregLossesStarvation], ["Other", this.state.apregLossesOther]]} 
                                    colors={["#36A2EB", "#FFD700", "#FFA500", "#FF6384"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-auto">
                                <h4 className="header-text-beek-sub">Beek Losses by Season</h4>
                                <br />
                                <div>
                                    <PieChart data={[["Spring", this.state.apregLossesSpring],["Summer", this.state.apregLossesSummer], ["Fall", this.state.apregLossesFall], ["Winter", this.state.apregLossesWinter]]} 
                                    colors={["#FF6384", "#FFD700", "#FFA500", "#36A2EB"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-auto">
                                <h4 className="header-text-beek-sub">Beek Increases by Type</h4>
                                <br />
                                <div>
                                    <PieChart data={[["Splits", this.state.apregIncreasesSplits], ["Packages", this.state.apregIncreasesPackages], ["Nucs", this.state.apregIncreasesNucs], ["Swarms", this.state.apregIncreasesSwarms]]} 
                                    colors={["#36A2EB", "#FFD700", "#FF6384", "#FFA500"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                        </div>
                        <div className="border col-md-6 text-red">
                            <div className="col-auto align-middle">
                                <br />
                                <h3 className="header-text-state align-middle"><a href="http://localhost:3000/apregs"><img src={WVRed} alt="Red WV" height="37.22%" width="37.22%"></img></a><br />
                                Statewide (WV) CLA</h3>
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
                                <h4 className="header-text-state-sub">WV Hive Loss Causation</h4>
                                <br />
                                <div className="align-left">
                                    <PieChart data={[["Mites", this.state.summationLossesMites], ["Queen Failure", this.state.summationLossesQueenFailure], ["Starvation", this.state.summationLossesStarvation], ["Other", this.state.summationLossesOther]]} 
                                    colors={["#36A2EB", "#FFD700", "#FFA500", "#FF6384"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-auto">
                                <h4 className="header-text-state-sub">WV Hive Losses by Season</h4>
                                <br />
                                <div>
                                    <PieChart data={[["Spring", this.state.summationLossesSpring], ["Summer", this.state.summationLossesSummer], ["Fall", this.state.summationLossesFall], ["Winter", this.state.summationLossesWinter]]} 
                                    colors={["#FF6384", "#FFD700", "#FFA500", "#36A2EB"]} />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-auto">
                                <h4 className="header-text-state-sub">WV Hive Increases by Type</h4>
                                <br />
                                <div>
                                    <PieChart data={[["Splits", this.state.summationIncreasesSplits], ["Packages", this.state.summationIncreasesPackages], ["Nucs", this.state.summationIncreasesNucs], ["Swarms", this.state.summationIncreasesSwarms]]} 
                                    colors={["#36A2EB", "#FFD700", "#FF6384", "#FFA500"]} />
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