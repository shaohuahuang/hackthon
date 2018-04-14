import React from "react"
import { List, ListItem } from "material-ui/List"
import { connect } from "react-redux"

import styled from "styled-components"
import muiThemeable from "material-ui/styles/muiThemeable"

import * as actions from "../actions"
import MonthlyRentalSlip from "./MonthlyRentalSlip"
import AddItemDialog from "./AddItemDialog"

class RentalSlip extends React.Component {
    // constructor() {
    //     super()
    // }
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
                    console.log(this)
                    return (
                        <StyledListItem
                            key={key}
                            data-theme={muiTheme}
                            disabled
                            nestedItems={[
                                <MonthlyRentalSlip
                                    key="monthly"
                                    items={monthlySlip}
                                />
                            ]}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <p>{key}</p>
                                <AddItemDialog />
                            </div>
                        </StyledListItem>
                    )
                })}
            </List>
        )
    }
}

const StyledListItem = styled(ListItem)`
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    border: ${props =>
        `1px solid ${props["data-theme"].rentalSlip.borderColor} !important`};
`

const mapStateToProps = state => ({ rentalSlips: state.rentalSlips })

export default muiThemeable()(connect(mapStateToProps, actions)(RentalSlip))
