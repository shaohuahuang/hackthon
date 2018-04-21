import React from "react"
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table"
import { connect } from "react-redux"
import IconButton from "material-ui/IconButton"
import FontIcon from "material-ui/FontIcon"

import DeleteDialog from "./DeleteDialog"
import * as actions from "../actions"

class MonthlyRentalSlip extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            selectedItem: {}
        }
        this.onToggleDialog = this.onToggleDialog.bind(this)
    }

    onToggleDialog(item) {
        this.setState(prev => ({
            selectedItem: item,
            isOpen: !prev.isOpen
        }))
    }

    render() {
        const { month, items } = this.props
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Item</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                            <TableHeaderColumn>Delete</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map(item => (
                            <TableRow key={item.id}>
                                <TableRowColumn>{item.item}</TableRowColumn>
                                <TableRowColumn>{item.amount}</TableRowColumn>
                                <TableRowColumn>{item.date}</TableRowColumn>
                                <TableRowColumn>
                                    <IconButton
                                        onClick={() =>
                                            this.onToggleDialog({
                                                ...item,
                                                month
                                            })}
                                    >
                                        <FontIcon
                                            className="material-icons"
                                            color="red"
                                        >
                                            delete
                                        </FontIcon>
                                    </IconButton>
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <DeleteDialog
                    isOpen={this.state.isOpen}
                    onClose={this.onToggleDialog}
                    onDelete={() =>
                        this.props.deleteItem(this.state.selectedItem)}
                />
            </div>
        )
    }
}

export default connect(null, actions)(MonthlyRentalSlip)
