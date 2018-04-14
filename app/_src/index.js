import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import injectTapEventPlugin from "react-tap-event-plugin"
import Theme from "./theme"

import App from "./App"
import configureStore from "./configureStore"

injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/:filter" component={App} />
                </Switch>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("app")
)