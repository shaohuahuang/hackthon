import React from "react"
import { Route, Switch } from "react-router-dom"
import Dashboard from "./components/Dashboard"
// import Dashboard from "./components/MyReactTable"
import MyAppBar from "./components/MyAppBar"
import Login from "./components/Login"

const App = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route
            path="/appointments"
            component={() => (
                <div>
                    <MyAppBar /> <Dashboard />{" "}
                </div>
            )}
        />
    </Switch>

    // <div>
    //     <MyAppBar />
    //     <Dashboard />
    //     {/* <MyAppBar />*/}
    //     {/* <Switch>*/}
    //     {/* <Route exact path="/" component={RentalSlip} />*/}
    //     {/* <Route path="/analytics" component={Analytics} />*/}
    //     {/* </Switch>*/}
    // </div>
)

export default App
