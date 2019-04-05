// Create React App:
// npx create-react-app [Insert Name of Application / Location]
// cd [Insert Name of Application / Location]
// npm start

// Open a new terminal window, and start NPM with the following command(s):
// From "beeport" folder:
// npm start

// Open a new terminal window, and start API with the following command(s):
// From "beeport" folder:
// json-server -p 5002 -w api/database.json
// From "api" folder:
// json-server -p 5002 -w database.json
import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from '../components/authentication/login'
import NewUserReg from '../components/authentication/newUserReg'
import Home from '../components/home/home'
import Report from '../components/report/report'
import ApregList from '../components/Apreg/apregsList'
import ApregForm from '../components/Apreg/apregForm'
import ApregEditForm from '../components/Apreg/apregEditForm'
import apregsAPIManager from '../components/Apreg/apregsAPIManager'

export default class ApplicationViews extends Component {

    // Populating React Component State from an API...
    state = {
        // Render the component to the DOM without any data.
        // Empty out current hard-coded state in the ApplicationViews component:
        // Reconfigure it to query the entire API and populate this data structure.
        users: [],
        apregs: []
        // Populate the API from JSON (why the arrays / data structure are empty, above).
    };

    isAuthenticated = () => sessionStorage.getItem("userId") !== null

    componentDidMount() {
        const newState = {};
        apregsAPIManager.getAllApregs()
            .then(users => (newState.users = users))
        if (sessionStorage.userId !== "" || localStorage.userId !== "") {
            return this.getUserApregs(sessionStorage.getItem("userId"))
                .then(() => this.setState(newState))
        }
    }

    updateApreg = editedApreg => {
        return apregsAPIManager.putApreg(editedApreg)
            .then(() => this.getUserApregs(sessionStorage.getItem("userId")))
    };

    deleteApreg = id => {
        return apregsAPIManager.deleteApreg(id)
            .then(() => this.getUserApregs(sessionStorage.getItem("userId")))
    };

    getUserApregs = id => {
        return apregsAPIManager.getUserApregs(id)
            .then(pua => {
                const apregsByDate = pua.sort(function (a, b) {
                    var DateA = new Date(a.timestamp), DateB = new Date(b.timestamp)
                    return DateA - DateB
                })
                this.setState({
                    apregs: apregsByDate
                })
            })
    }

    postApreg = apregObject => {
        return apregsAPIManager.postApreg(apregObject)
            .then(() => this.getUserApregs(sessionStorage.getItem("userId"))
            )
    }

    render() {
        return (
            <React.Fragment>

                <Route
                    exact
                    path="/"
                    render={props => {
                        return <Login  {...props} getUserApregs={this.getUserApregs} />
                    }}

                />
                <Route
                    exact
                    path="/register"
                    render={props => {
                        return <NewUserReg {...props} getUserApregs={this.getUserApregs} />;
                    }}
                />

                <Route
                    exact
                    path="/home"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <Home {...props} apregs={this.state.apregs} getUserApregs={this.getUserApregs} />
                        } else {
                            return <Redirect to="/" />
                        }
                    }}
                />

                <Route
                    exact
                    path="/report"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <Report {...props} apregs={this.state.apregs} getUserApregs={this.getUserApregs} />
                        } else {
                            return <Redirect to="/" />
                        }
                    }}
                />

                <Route exact path="/apregs" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ApregList {...props} apregs={this.state.apregs} getUserApregs={this.state.getUserApregs} deleteApreg={this.deleteApreg} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />

                <Route path="/apregs/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ApregForm {...props}
                            apregs={this.state.apregs} postApreg={this.postApreg} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />

                <Route
                    path="/apregs/:apregId(\d+)/edit"
                    render={props => {
                        return (
                            <ApregEditForm
                                {...props}
                                apregs={this.state.apregs}
                                updateApreg={this.updateApreg}
                            />
                        );
                    }}
                />

            </React.Fragment>
        );
    }
}
