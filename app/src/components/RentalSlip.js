import React from "react"
import { List, ListItem } from "material-ui/List"
import { connect } from "react-redux"

import styled from "styled-components"
import muiThemeable from "material-ui/styles/muiThemeable"

import RaisedButton from "material-ui/RaisedButton"

import * as actions from "../actions"
import * as selectActions from "../actions/select-actions"
import * as outstandingActions from "../actions/outstanding-actions"
import MonthlyRentalSlip from "./MonthlyRentalSlip"
import AddItemDialog from "./AddItemDialog"
import { isLastTwoMonth, getLastTwoMonths, isLastSecond } from "../util/util"

class RentalSlip extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        this.props.fetchRentalSlips()
        this.props.fetchOutstandings()
    }

    handleOpen(month) {
        return () => {
            this.props.selectRentalMonth(month)
            this.setState({ open: true })
        }
    }

    handleClose() {
        this.setState({ open: false })
    }

    render() {
        const { rentalSlips, muiTheme, dialog, outstandings } = this.props
        const lastTwoMonths = getLastTwoMonths(rentalSlips)
        return (
            <List>
                {Object.keys(rentalSlips).map(month => {
                    let monthlySlip = rentalSlips[month]
                    const isLastTwo = isLastTwoMonth(month, lastTwoMonths)
                    const isLast =
                        isLastTwo && !isLastSecond(rentalSlips, month)
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
                                    month={month}
                                    isLastTwoMonth={isLastTwo}
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
                                <p>
                                    Outstanding:{" "}
                                    {outstandings[month]
                                        ? outstandings[month].outstanding
                                        : null}
                                </p>
                                {isLast ? <p>YTD Outstanding: TODO</p> : null}

                                {isLastTwo ? (
                                    <RaisedButton
                                        label="Add Item"
                                        onClick={this.handleOpen(month)}
                                    />
                                ) : null}
                            </div>
                        </StyledListItem>
                    )
                })}
                <AddItemDialog
                    isOpen={this.state.open}
                    handleClose={this.handleClose}
                    onAdd={this.props.addItem}
                    month={dialog.selectedRentalMonth}
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

const mapStateToProps = state => ({
    rentalSlips: state.rentalSlips,
    dialog: state.dialog,
    outstandings: state.outstandings
})

export default muiThemeable()(
    connect(mapStateToProps, {
        ...actions,
        ...selectActions,
        ...outstandingActions
    })(RentalSlip)
)
