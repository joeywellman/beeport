import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css';


export default class NavBar extends Component {

    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.setState()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 shadow">
            <a className="navbar-brand" href="http://localhost:3000/home"><b>&nbsp; &nbsp; Beeport</b></a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link white-text" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link white-text" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link white-text" to="/apregs">Apiary Registration</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link white-text" to="/report">Honey Bee Reports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link white-text" to="/pollinate">Pollination Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link white-text" to="/swarm">Swarm Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link white-text" to="/resource">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {sessionStorage.getItem("userId") === null &&
                            localStorage.getItem("userId") === null
                            ? (
                                <Link className="nav-link" to="/">
                                    <b>Sign In</b>
                                </Link>
                            ) : (
                                <Link className="nav-link" to="/" onClick={this.logout}>
                                    <b>Sign Out</b>
                                </Link>
                            )}
                    </li>

                </ul>
            </nav>
        )
    }
}
