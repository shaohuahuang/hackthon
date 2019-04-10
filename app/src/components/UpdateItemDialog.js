import React from "react"
import Dialog from "material-ui/Dialog"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"

class UpdateItemDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: null,
            amount: null
        }
        this.onChangeItem = this.onChangeItem.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        this.onClose = this.onClose.bind(this)
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

    onUpdate() {
        const { updateItem } = this.props
        const { id } = this.props.slipItem
        const { item, amount } = this.state
        updateItem({
            id,
            item: item || this.props.slipItem.item,
            amount: amount || this.props.slipItem.amount,
            rental_month: this.props.slipItem.rental_month
        })
        this.onClose()
    }

    onClose() {
        // empty state when update is done
        this.setState(() => ({
            item: null,
            amount: null,
            rental_month: null
        }))
        this.props.onClose()
    }

    render() {
        if (!this.props.slipItem) return null
        const { item, amount, rental_month: rentalMonth } = this.props.slipItem
        const actionButtons = [
            <RaisedButton
                label="Update"
                primary
                keyboardFocused
                onClick={this.onUpdate}
            />
        ]
        return (
            <Dialog
                title="Update Item"
                actions={actionButtons}
                modal={false}
                open={this.props.isOpen}
                onRequestClose={this.onClose}
            >
                <TextField
                    id="item"
                    hintText="item"
                    onChange={this.onChangeItem}
                    value={this.state.item || item}
                />
                <br />
                <TextField
                    id="amount"
                    hintText="amount"
                    onChange={this.onChangeAmount}
                    defaultValue={this.state.amount || amount}
                />
                <br />
                <p>{rentalMonth}</p>
            </Dialog>
        )
    }
}

export default UpdateItemDialog
