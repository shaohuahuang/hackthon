import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"

import App from "./App"
import configureStore from "./configureStore"

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/(:filter)" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
)
