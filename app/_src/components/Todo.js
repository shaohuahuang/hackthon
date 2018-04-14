import React from "react"
import styled from "styled-components"
import muiThemeable from "material-ui/styles/muiThemeable"

const Todo = ({ onClick, completed, text, muiTheme }) => (
    <StyledLi
        onClick={onClick}
        data-completed={completed}
        data-theme={muiTheme}
    >
        {text}
    </StyledLi>
)

const StyledLi = styled.li`
    text-decoration: ${props =>
        props["data-completed"] ? "line-through" : "none"};
    background: ${props => props["data-theme"].background};
`

export default muiThemeable()(Todo)
