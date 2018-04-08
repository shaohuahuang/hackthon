import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
// import { bindActionCreators } from "redux"
import * as actions from "../actions"
import TodoList from "../components/TodoList"
import { getVisibleTodos, getIsFetching } from "../reducers"

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchTodos()
    }
    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchTodos()
        }
    }

    fetchTodos() {
        const { filter, fetchTodos } = this.props
        fetchTodos(filter)
    }

    render() {
        const { toggleTodo, todos, isFetching } = this.props
        if (isFetching && !todos.length) {
            return <p>Loading...</p>
        }
        return <TodoList todos={todos} onTodoClick={toggleTodo} />
    }
}

const mapStateToProps = (state, { params }) => ({
    todos: getVisibleTodos(state, params.filter || "all"),
    filter: params.filter || "all",
    isFetching: getIsFetching(state, params.filter || "all")
})

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
