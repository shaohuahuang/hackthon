import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import todoApp from "./reducers"

const configureStore = () => {
    const middlewares = [thunk]
    const store = createStore(todoApp, applyMiddleware(...middlewares))
    return store
}

export default configureStore
