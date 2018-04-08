import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import App from "./App"
import configureStore from "./configureStore"

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/:filter" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("app")
)
