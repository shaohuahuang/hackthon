import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
// import { bindActionCreators } from "redux"
import * as actions from "../actions"
import TodoList from "../components/TodoList"
import { getVisibleTodos, getIsFetching } from "../reducers"

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData()
    }
    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData()
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props
        fetchTodos(filter)
    }

    render() {
        const { toggleTodo, todos, isFetching } = this.props
        if (isFetching && !todos.length) {
            return <p>Loading...</p>
        }
        return <TodoList todos={todos} toggleTodo={toggleTodo} />
    }
}

const mapStateToProps = (state, { match }) => {
    console.log(match.params.filter) // Why this triggered three times
    const filter = match.params.filter ? match.params.filter : "all"
    return {
        todos: getVisibleTodos(state, filter),
        filter,
        isFetching: getIsFetching(state, filter)
    }
}

// const mapDispatchToProps = dispatch =>
//     // return {
//     //   onTodoClick: id => {
//     //     dispatch(toggleTodo(id))
//     //   }
//     // }
//     bindActionCreators(toggleTodo, dispatch)

const MyVisibleTodoList = withRouter(
    connect(mapStateToProps, actions)(VisibleTodoList)
)

export default MyVisibleTodoList
