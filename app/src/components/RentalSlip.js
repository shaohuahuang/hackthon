import React from "react"
import { List, ListItem } from "material-ui/List"
import { connect } from "react-redux"

import styled from "styled-components"
import muiThemeable from "material-ui/styles/muiThemeable"

import RaisedButton from "material-ui/RaisedButton"

import * as actions from "../actions"
import MonthlyRentalSlip from "./MonthlyRentalSlip"
import AddItemDialog from "./AddItemDialog"

class RentalSlip extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false,
            selectedMonth: ""
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        this.props.fetchRentalSlips()
    }

    handleOpen(month) {
        return () => this.setState({ open: true, selectedMonth: month })
    }

    handleClose() {
        this.setState({ open: false })
    }

    render() {
        const { rentalSlips, muiTheme } = this.props
        return (
            <List>
                {Object.keys(rentalSlips).map(month => {
                    let monthlySlip = rentalSlips[month]
                    if (!monthlySlip || !monthlySlip.length) monthlySlip = []
                    return (
                        <StyledListItem
                            key={month}
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
                                <p>{month}</p>
                                <RaisedButton
                                    label="Add Item"
                                    onClick={this.handleOpen(month)}
                                />
                            </div>
                        </StyledListItem>
                    )
                })}
                <AddItemDialog
                    isOpen={this.state.open}
                    handleClose={this.handleClose}
                    onAdd={this.props.addItem}
                    month={this.state.selectedMonth}
                />
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
