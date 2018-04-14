import React from "react"
import { List, ListItem } from "material-ui/List"
import { connect } from "react-redux"

import styled from "styled-components"
import muiThemeable from "material-ui/styles/muiThemeable"

import Dialog from "material-ui/Dialog"
import RaisedButton from "material-ui/RaisedButton"
import FlatButton from "material-ui/FlatButton"

import * as actions from "../actions"
import MonthlyRentalSlip from "./MonthlyRentalSlip"

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
    }

    handleOpen() {
        this.setState({ open: true })
    }

    handleClose() {
        this.setState({ open: false })
    }

    render() {
        const { rentalSlips, muiTheme } = this.props
        const actions = [
            <FlatButton
                label="Ok"
                primary
                keyboardFocused
                onClick={this.handleClose}
            />
        ]

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
                                <RaisedButton
                                    label="Add Item"
                                    onClick={this.handleOpen}
                                />

                                <Dialog
                                    title="Dialog With Date Picker"
                                    actions={actions}
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose}
                                >
                                    Open a Date Picker dialog from within a
                                    dialog.
                                    {/* <DatePicker hintText="Date Picker" />*/}
                                </Dialog>
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
