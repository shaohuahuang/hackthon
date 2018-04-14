import React from "react"
import { List, ListItem } from "material-ui/List"
import { connect } from "react-redux"

import styled from "styled-components"
import muiThemeable from "material-ui/styles/muiThemeable"

import * as actions from "../actions"
import MonthlyRentalSlip from "./MonthlyRentalSlip"

class RentalSlip extends React.Component {
    componentDidMount() {
        this.props.fetchRentalSlips()
    }

    render() {
        const { rentalSlips, muiTheme } = this.props
        return (
            <List>
                {Object.keys(rentalSlips).map(key => {
                    let monthlySlip = rentalSlips[key]
                    if (!monthlySlip || !monthlySlip.length) monthlySlip = []
                    return (
                        <StyledListItem
                            key={key}
                            primaryText={key}
                            data-theme={muiTheme}
                            nestedItems={[
                                <MonthlyRentalSlip
                                    key="monthly"
                                    items={monthlySlip}
                                />
                            ]}
                        />
                    )
                })}
            </List>
        )
    }
}

const StyledListItem = styled(ListItem)`
    border: ${props =>
        `1px solid ${props["data-theme"].rentalSlip.borderColor} !important`};
`

const mapStateToProps = state => ({ rentalSlips: state.rentalSlips })

export default muiThemeable()(connect(mapStateToProps, actions)(RentalSlip))
