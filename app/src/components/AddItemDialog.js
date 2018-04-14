import React from "react"
import Dialog from "material-ui/Dialog"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import moment from "moment"
import { v4 } from "node-uuid"

class AddItemDialog extends React.Component {
    constructor() {
        super()
        this.state = {
            item: "",
            amount: 0,
            date: moment().format("YYYY-MM-DD")
        }
        this.onChangeItem = this.onChangeItem.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onAdd = this.onAdd.bind(this)
    }

    onChangeItem(e, item) {
        this.setState(() => ({
            item
        }))
    }

    onChangeAmount(e, amount) {
        this.setState(() => ({
            amount: parseFloat(amount)
        }))
    }

    onChangeDate(e, date) {
        this.setState(() => ({
            date
        }))
    }

    onAdd() {
        const id = v4()
        const { month, onAdd } = this.props
        const { item, amount, date } = this.state
        onAdd({ month, id, item, amount, date })
        this.props.handleClose()
    }

    render() {
        const actionButtons = [
            <RaisedButton
                label="Add"
                primary
                keyboardFocused
                onClick={this.onAdd}
            />
        ]
        return (
            <Dialog
                title="Dialog With Date Picker"
                actions={actionButtons}
                modal={false}
                open={this.props.isOpen}
                onRequestClose={this.props.handleClose}
            >
                <TextField hintText="item" onChange={this.onChangeItem} />
                <br />
                <TextField hintText="amount" onChange={this.onChangeAmount} />
                <br />
                <TextField
                    defaultValue={moment().format("YYYY-MM-DD")}
                    onChange={this.onChangeDate}
                />
            </Dialog>
        )
    }
}

export default AddItemDialog
