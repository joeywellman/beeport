import React, { Component } from "react";
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
            totalColonies: "",
            totalApiaries: "",
            lossesMites: "",
            lossesQueenFailure: "",
            lossesStarvation: "",
            lossesOther: "",
            lossesSummer: "",
            lossesWinter: "",
            increasesSplits: "",
            increasesPackages: "",
            increasesNucs: "",
            increasesSwarms: "",
            userId: "",
            id: "",
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
                var sumUserId = 0;
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
                        sumIncreasesSwarms += parseFloat(apreg.increasesSwarms);
                        sumUserId += parseFloat(apreg.userId);
                    });
                }
                this.setState({
                    totalColonies: sumColonies,
                    totalApiaries: sumApiaries,
                    lossesMites: sumLossesMites,
                    lossesQueenFailure: sumLossesQueenFailure,
                    lossesStarvation: sumLossesStarvation,
                    lossesOther: sumLossesOther,
                    lossesSummer: sumLossesSummer,
                    lossesWinter: sumLossesWinter,
                    increasesSplits: sumIncreasesSplits,
                    increasesPackages: sumIncreasesPackages,
                    increasesNucs: sumIncreasesNucs,
                    increasesSwarms: sumIncreasesSwarms,
                    userId: sumUserId,
                    isLoading: false
                });
                console.log(sumColonies)
                console.log(sumApiaries)
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

        return (
            <React.Fragment>
                <br />
                <section className="">
                    <h2>Statewide Colony Loss Analyses (CLAs)</h2>
                    <br />
                    <div>
                        {/* <p><b>Number of Beekeepers Surveyed:</b><br />
                            {this.state.id}
                        </p> */}
                        <p><b>Number of Reports Received:</b><br />
                            <CountUp
                                className="total-apiaries"
                                start={0}
                                end={Number(this.state.userId)}
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
                        <p><b>Number of Apiaries:</b><br />
                            <CountUp
                                className="total-apiaries"
                                start={0}
                                end={Number(this.state.totalApiaries)}
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
                        <p><b>Number of Colonies:</b><br />
                            <CountUp
                                className="total-apiaries"
                                start={0}
                                end={Number(this.state.totalColonies)}
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
                        </p></div>
                    <br />
                    <hr />
                    <br />
                    <div>
                        <h3>WV Hive Loss Causation</h3>
                        <br />
                        <div>
                            <PieChart data={[["Mites", this.state.lossesMites], ["Queen Failure", this.state.lossesQueenFailure], ["Starvation", this.state.lossesStarvation], ["Other", this.state.lossesOther]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} hoverBackgroundColor={["#DC143C","#0000FF","#FFFF00", "#FF4500"]} />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                        <h3>WV Hive Losses by Season</h3>
                        <br />
                        <div>
                            <PieChart data={[["Summer", this.state.lossesSummer], ["Winter", this.state.lossesWinter]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                        <h3>WV Hive Increases by Type</h3>
                        <br />
                        <div>
                            <PieChart data={[["Splits", this.state.increasesSplits], ["Packages", this.state.increasesPackages], ["Nucs", this.state.increasesNucs], ["Swarms", this.state.increasesSwarms]]} colors={["#FF6384", "#36A2EB", "#FFD700", "#FFA500"]} />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                </section>
            </React.Fragment>
        );
    }
}