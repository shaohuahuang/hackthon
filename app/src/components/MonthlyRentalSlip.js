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
import moment from "moment"

import DeleteDialog from "./DeleteDialog"
import UpdateItemDialog from "./UpdateItemDialog"
import * as actions from "../actions"

class MonthlyRentalSlip extends React.Component {
    constructor() {
        super()
        this.state = {
            isDeleteDialogOpen: false,
            isUpdateDialogOpen: false,
            selectedItem: {}
        }
        this.onToggleDeleteDialog = this.onToggleDeleteDialog.bind(this)
        this.onToggleUpdateDialog = this.onToggleUpdateDialog.bind(this)
    }

    onToggleDeleteDialog(item) {
        this.setState(prev => ({
            selectedItem: item,
            isDeleteDialogOpen: !prev.isDeleteDialogOpen
        }))
    }

    onToggleUpdateDialog(item) {
        this.setState(prev => ({
            selectedItem: item,
            isUpdateDialogOpen: !prev.isUpdateDialogOpen
        }))
    }

    render() {
        const { items } = this.props
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Item</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                            <TableHeaderColumn>Edit</TableHeaderColumn>
                            <TableHeaderColumn>Delete</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map(item => (
                            <TableRow key={item.id}>
                                <TableRowColumn>{item.item}</TableRowColumn>
                                <TableRowColumn>{item.amount}</TableRowColumn>
                                <TableRowColumn>
                                    {moment(item.create_date).format(
                                        "YYYY-MM-DD"
                                    )}
                                </TableRowColumn>
                                <TableRowColumn>
                                    <IconButton
                                        onClick={() =>
                                            this.onToggleUpdateDialog(item)}
                                    >
                                        <FontIcon
                                            className="material-icons"
                                            color="blue"
                                        >
                                            edit
                                        </FontIcon>
                                    </IconButton>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <IconButton
                                        onClick={() =>
                                            this.onToggleDeleteDialog(item)}
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
                    isOpen={this.state.isDeleteDialogOpen}
                    onClose={this.onToggleDeleteDialog}
                    onDelete={() =>
                        this.props.deleteItem(this.state.selectedItem)}
                />

                <UpdateItemDialog
                    isOpen={this.state.isUpdateDialogOpen}
                    onClose={this.onToggleUpdateDialog}
                    onUpdate={this.props.onUpdateItem}
                    item={this.state.selectedItem}
                />
            </div>
        )
    }
}

export default connect(null, actions)(MonthlyRentalSlip)
