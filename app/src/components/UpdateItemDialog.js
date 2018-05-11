import React from "react"
import Dialog from "material-ui/Dialog"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import moment from "moment"

class UpdateItemDialog extends React.Component {
    constructor(props) {
        super(props)
        const { item, amount, create_date } = props.item
        this.state = {
            item,
            amount,
            create_date: moment(create_date).format("YYYY-MM-DD")
        }
        this.onChangeItem = this.onChangeItem.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
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

    onUpdate() {
        const { onUpdate } = this.props
        const { rental_month, id } = this.props.item
        const { item, amount, create_date } = this.state
        onUpdate({ rental_month, id, item, amount, create_date })
        this.props.onClose()
    }

    render() {
        const actionButtons = [
            <RaisedButton
                label="Update"
                primary
                keyboardFocused
                onClick={this.onUpdate}
            />
        ]
        console.log(this.state)
        return (
            <Dialog
                title="Update Item"
                actions={actionButtons}
                modal={false}
                open={this.props.isOpen}
                onRequestClose={this.props.onClose}
            >
                <TextField
                    id="item"
                    hintText="item"
                    onChange={this.onChangeItem}
                    defaultValue={this.state.item}
                />
                <br />
                <TextField
                    id="amount"
                    hintText="amount"
                    onChange={this.onChangeAmount}
                    defaultValue={this.state.amount}
                />
                <br />
                <TextField
                    id="create_date"
                    defaultValue={moment(this.state.create_date).format(
                        "YYYY-MM-DD"
                    )}
                    onChange={this.onChangeDate}
                />
            </Dialog>
        )
    }
}

export default UpdateItemDialog
