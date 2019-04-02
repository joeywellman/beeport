import React, { Component } from "react";
import ApregCard from './apregCard';
import "./apregs.css";


export default class ApregList extends Component {

    render() {
        return (
            <React.Fragment>
                <h2>Annual Apiary Registration Submissions</h2>
                <div className="addApregButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/apregs/new")
                        }
                        }>
                        Fill Out New Application
                    </button>
                </div>
                <br></br>
                <section className="apregs">
                    {this.props.apregs.map(apreg => (
                        <ApregCard key={apreg.id} apreg={apreg} deleteApreg={this.props.deleteApreg} {...this.props} />
                    ))}
                </section>

            </React.Fragment>
        );
    }
}