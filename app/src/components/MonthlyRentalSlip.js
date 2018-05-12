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
import * as selectActions from "../actions/select-actions"

class MonthlyRentalSlip extends React.Component {
    constructor() {
        super()
        this.state = {
            isDeleteDialogOpen: false,
            isUpdateDialogOpen: false
        }
        this.onToggleDeleteDialog = this.onToggleDeleteDialog.bind(this)
        this.onToggleUpdateDialog = this.onToggleUpdateDialog.bind(this)
    }

    onToggleDeleteDialog(item) {
        this.props.selectItem(item)
        this.setState(prev => ({
            isDeleteDialogOpen: !prev.isDeleteDialogOpen
        }))
    }

    onToggleUpdateDialog(item) {
        this.props.selectItem(item)
        this.setState(prev => ({
            isUpdateDialogOpen: !prev.isUpdateDialogOpen
        }))
    }

    render() {
        const { items, dialog, isLastTwoMonth } = this.props
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Item</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                            {isLastTwoMonth ? (
                                <TableHeaderColumn>Edit</TableHeaderColumn>
                            ) : null}
                            {isLastTwoMonth ? (
                                <TableHeaderColumn>Delete</TableHeaderColumn>
                            ) : null}
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

                                {isLastTwoMonth ? (
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
                                ) : null}

                                {isLastTwoMonth ? (
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
                                ) : null}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <DeleteDialog
                    isOpen={this.state.isDeleteDialogOpen}
                    onClose={this.onToggleDeleteDialog}
                    onDelete={() => this.props.deleteItem(dialog.selectedItem)}
                />

                <UpdateItemDialog
                    isOpen={this.state.isUpdateDialogOpen}
                    onClose={this.onToggleUpdateDialog}
                    updateItem={this.props.updateItem}
                    item={dialog.selectedItem}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dialog: state.dialog
})

export default connect(mapStateToProps, { ...actions, ...selectActions })(
    MonthlyRentalSlip
)
