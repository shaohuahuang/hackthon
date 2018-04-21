import React from "react"
import { Route, Switch } from "react-router-dom"
import RentalSlip from "./components/RentalSlip"
import Analytics from "./components/Analytics"
import MyAppBar from "./components/MyAppBar"

const App = () => (
    <div>
        <MyAppBar />
        <Switch>
            <Route exact path="/" component={RentalSlip} />
            <Route path="/analytics" component={Analytics} />
        </Switch>
    </div>
)

export default App
