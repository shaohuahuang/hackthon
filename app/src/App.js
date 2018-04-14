import React from "react"
import { Route, Switch } from "react-router-dom"
import RentalSlip from "./components/RentalSlip"
import Analytics from "./components/Analytics"

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={RentalSlip} />
            <Route path="/analytics" component={Analytics} />
        </Switch>
    </div>
)

export default App
