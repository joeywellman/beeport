import React, { Component } from "react"
import './login.css'
import userManager from "./userManager";


export default class Login extends Component {

    // Set Initial State:
    state = {

        userEmail: "",
        userPassword: "",
        rememberMe: ""
    }

    // Update State whenever an Input Field is Edited:
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleCheckbox = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.checked
        this.setState(stateToChange)
    }

    goBack() {
        window.history.back();
    }

    // Simplistic Handler for Login Submit:
    handleLogin = (e) => {
        e.preventDefault()
        if (this.state.userEmail === "") {
            alert("Please Enter Your Registered e-mail Address.")
        } else if
        (this.state.userPassword === "") {
            alert("Please Enter Your Password")
        }
        else {
            userManager.checkUserEmail(this.state.userEmail)
                .then(su => {
                    console.log(su)
                    if (su[0].length === 0) {
                        alert("That e-mail address was NOT found.  Please register or try to use a different email.")
                    } if
                        (su[0].userPassword !== this.state.userPassword) {
                        alert("That password is NOT correct.  Please try again.")
                    }
                    else if (this.state.rememberMe === true) {
                        localStorage.setItem("userId", su[0].id)
                        sessionStorage.setItem("userId", su[0].id)
                        this.props.getUserApregs(parseInt(sessionStorage.getItem("userId")))
                        this.props.history.push("/home")
                        window.location.reload();
                    } else {
                        sessionStorage.setItem("userId", su[0].id)
                        this.props.getUserApregs(parseInt(sessionStorage.getItem("userId")))
                        this.props.history.push("/home")
                        window.location.reload();
                    }
                }
            )
        }
    }


render() {
    return (
        <div>
            <form onSubmit={this.handleLogin}>
                <h1>Beeport</h1>
                <h2 className="h3 mb-3 font-weight-normal">Please Sign In</h2>
                <br></br>

                <label htmlFor="userEmail">
                    Email Address:
                </label>
                <input onChange={this.handleFieldChange} type="email"
                    id="userEmail"
                    placeholder="Email Address"
                    required="" autoFocus="" />
                <br></br>
                <label htmlFor="inputPassword">
                    Password:
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="userPassword"
                    placeholder="Password"
                    required="" />
                <br></br>
                <label htmlFor="rememberMe">
                    Remember Me
                </label>
                <input onChange={this.handleCheckbox} type="checkbox"
                    id="rememberMe"
                    placeholder=""
                    required="" autoFocus="" />
                <br></br>
                <button type="submit">
                    Sign In
                        </button>
            </form>
            <section>
                <br></br>
                <h3>-or-</h3>
                <br></br>
                <button type="register" onClick={() => this.props.history.push("/register")}
                    id="newUserReg">
                    Register New User
                </button>
            </section>
        </div>
    )
}
}