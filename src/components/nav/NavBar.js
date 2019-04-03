import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
export default class NavBar extends Component {

    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.setState()
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/apregs">Apiary Registration</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/report">Beek Reports</Link>
                    </li>
                    <li className="nav-item">
                        {sessionStorage.getItem("userId") === null &&
                            localStorage.getItem("userId") === null
                            ? (
                                <Link className="nav-link" to="/">
                                    Sign In
                    </Link>
                            ) : (
                                <Link className="nav-link" to="/" onClick={this.logout}>
                                    Sign Out
                    </Link>
                            )}
                    </li>

                </ul>
            </nav>
        )
    }
}
