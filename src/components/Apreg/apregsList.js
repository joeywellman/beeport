import React, { Component } from "react";
import ApregCard from './apregCard';
import "./apregs.css";
import Beeport from "../authentication/Beeport.jpg"


export default class ApregList extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 className="header-text"><a href="http://localhost:3000/apregs"><img src={Beeport} alt="Beeport Logo" height="20%" width="20%"></img></a><br />
                Annual Apiary Registration Submissions</h2>
                {/* <div className="addApregButton">
                <br />
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/apregs/new")
                        }
                        }>
                        Fill Out New Application
                    </button>
                </div> */}
                <br />
                <section className="apregs list-body">
                    {this.props.apregs.map(apreg => (
                        <ApregCard key={apreg.id} apreg={apreg} deleteApreg={this.props.deleteApreg} {...this.props} />
                    ))}
                </section>
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

            </React.Fragment>
        );
    }
}