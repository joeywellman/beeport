import React, { Component } from "react";
import './report.css';
import { Pie } from 'react-chartjs-2';


export default class Report extends Component {

    render() {

        const data = {
            labels: [
                'Test 1',
                'Test 2',
                'Test 3'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
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
            <React.Fragment>
                <h2>Beek Reports Page</h2>
                <div className="text-center">
                    This is the Report Page Placeholder
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', width: 'auto', backgroundColor: 'white', position: 'relative' }}>
                    <Pie data={data} height={150} width={200} options={options} />
                </div>
            </React.Fragment>
        );
    }
}