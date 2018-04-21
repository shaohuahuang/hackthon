import React from "react"
import ReactSignupLoginComponent from "react-signup-login-component"
import { withRouter } from "react-router-dom"

// const LoginPage = props => {
//     const signupWasClickedCallback = data => {
//         console.log(data)
//         alert("Signup callback, see log on the console to see the data.")
//     }
//     const loginWasClickedCallback = data => {
//         console.log(data)
//
//         // alert("Login callback, see log on the console to see the data.")
//     }
//     const recoverPasswordWasClickedCallback = data => {
//         console.log(data)
//         alert(
//             "Recover password callback, see log on the console to see the data."
//         )
//     }
//     return (
//         <div>
//             <ReactSignupLoginComponent
//                 title="Appointment Management"
//                 handleSignup={signupWasClickedCallback}
//                 handleLogin={loginWasClickedCallback}
//                 handleRecoverPassword={recoverPasswordWasClickedCallback}
//             />
//         </div>
//     )
// }

class LoginPage extends React.Component {
    constructor() {
        super()
        this.loginWasClickedCallback = this.loginWasClickedCallback.bind(this)
        // this.signupWasClickedCallback = this.signupWasClickedCallback.bind(this)
        // this.recoverPasswordWasClickedCallback = this.recoverPasswordWasClickedCallback.bind(
        //     this
        // )
    }

    // signupWasClickedCallback(data) {
    //     console.log(data)
    //     alert("Signup callback, see log on the console to see the data.")
    // }

    loginWasClickedCallback(data) {
        this.props.history.push("/appointments")
        console.log(data)

        // alert("Login callback, see log on the console to see the data.")
    }
    // recoverPasswordWasClickedCallback(data) {
    //     console.log(data)
    //     alert(
    //         "Recover password callback, see log on the console to see the data."
    //     )
    // }
    render() {
        return (
            <div>
                <ReactSignupLoginComponent
                    title="Appointment Management"
                    handleSignup={this.signupWasClickedCallback}
                    handleLogin={this.loginWasClickedCallback}
                    handleRecoverPassword={
                        this.recoverPasswordWasClickedCallback
                    }
                />
            </div>
        )
    }
}

export default withRouter(LoginPage)
