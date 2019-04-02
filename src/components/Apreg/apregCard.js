import React, { Component } from "react";
import { Link } from "react-router-dom";
import './apregs.css';

export default class ApregCard extends Component {
  render() {

    return (
      <div key={this.props.apreg.id} className="card">
        <div className="card-body">
          <h5 className="card-title">

            <p>{this.props.apreg.numberOfColonies}</p>
            <br></br>
            <p>{this.props.apreg.numberOfApiaries}</p>
            <p>{this.props.apreg.location}</p>

            <Link className="btn btn-success" to={`/apregs/${this.props.apreg.id}/edit`}>
              Edit Form
            </Link>
            <br></br>
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