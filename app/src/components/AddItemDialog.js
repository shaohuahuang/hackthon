import React from "react"
import Dialog from "material-ui/Dialog"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import moment from "moment"

class AddItemDialog extends React.Component {
    constructor() {
        super()
        this.state = {
            item: "",
            amount: 0,
            create_date: moment().format("YYYY-MM-DD")
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
            create_date: date
        }))
    }

    onAdd() {
        const { month, onAdd } = this.props
        const { item, amount, create_date } = this.state
        onAdd({ rental_month: month, item, amount, create_date })
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
                title="Add Item"
                actions={actionButtons}
                modal={false}
                open={this.props.isOpen}
                onRequestClose={this.props.handleClose}
            >
                <TextField
                    id="item"
                    hintText="item"
                    onChange={this.onChangeItem}
                />
                <br />
                <TextField
                    id="amount"
                    hintText="amount"
                    onChange={this.onChangeAmount}
                />
                <br />
                <TextField
                    id="create_date"
                    defaultValue={moment().format("YYYY-MM-DD")}
                    onChange={this.onChangeDate}
                />
            </Dialog>
        )
    }
}

export default AddItemDialog
