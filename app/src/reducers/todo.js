const todo = (state, action) => {
    switch (action.type) {
        case "ADD_TOD":
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case "TOGGLE_TODO":
            if (action.id !== action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

export default todo
