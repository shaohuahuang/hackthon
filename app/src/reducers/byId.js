import todo from "./todo"

const byId = (state = {}, action) => {
    let nextState
    switch (action.type) {
        case "RECEIVE_TODOS":
            nextState = { ...state } // shallow copy
            action.response.forEach(todo => {
                nextState[todo.id] = todo
            })
            return nextState
        case "TOGGLE_TODO":
            nextState = { ...state } // shallow copy
            nextState[action.id] = todo(nextState[action.id], action)
            return nextState
        default:
            return state
    }
}

export default byId

export const getTodo = (state, id) => state[id]
