import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import appData from "./reducers"

const configureStore = () => {
    const middlewares = [thunk]
    const store = createStore(appData, applyMiddleware(...middlewares))
    return store
}

export default configureStore
