import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css';
// import WVIcon from "./WVIcon.jpg"
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BugReportIcon from '@material-ui/icons/BugReport';
// import ContactIcon from '@material-ui/icons/People';
import ChartIcon from '@material-ui/icons/InsertChart';
import NatureIcon from '@material-ui/icons/NaturePeople';
import RegIcon from '@material-ui/icons/Receipt';
import ResIcon from '@material-ui/icons/Help';
import InIcon from '@material-ui/icons/Error';
import OutIcon from '@material-ui/icons/ExitToApp';
import AccountIcon from '@material-ui/icons/AccountCircle';


export default class NavBar extends Component {

    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.setState()
    }

    render() {
        return (
            <div className="headercss">
                <div className="headerlogo"></div>
                <nav className="navbar nav-fill w-100 navbar-dark bg-dark p-0 shadow">
                    {/* <a className="navbar-brand" href="http://localhost:3000/home"><b>Beeport</b></a> */}
                    {/* <img className="" src={WVIcon} alt="Beeport Logo" height="5%" width="5%"></img> */}
                    <ul className="nav nav-pills">
                        <li className="nav-item dropdown text-center">
                            <Link className="nav-link whiter-text" to="/home"><HomeIcon /><br />Home</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link white-text" to="/about"><InfoIcon /><br />About</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link white-text" to="/profile"><AccountIcon /><br />Profile</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link white-text" to="/apregs"><RegIcon /><br />Apiary Registration</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link white-text" to="/report"><ChartIcon /><br />Bee Reports</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link white-text" to="/pollinate"><NatureIcon /><br />Pollination Svcs.</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link white-text" to="/swarm"><BugReportIcon /><br />Swarm Contacts</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link white-text" to="/resource"><ResIcon /><br />Resources</Link>
                        </li>
                        <li className="nav-item text-center">
                            {sessionStorage.getItem("userId") === null &&
                                localStorage.getItem("userId") === null
                                ? (
                                    <Link className="nav-link whiter-text" to="/">
                                        <InIcon /><br /><b>Sign In</b>
                                    </Link>
                                ) : (
                                    <Link className="nav-link whiter-text" to="/" onClick={this.logout}>
                                        <OutIcon /><br /><b>Sign Out</b>
                                    </Link>
                                )}
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }
}
