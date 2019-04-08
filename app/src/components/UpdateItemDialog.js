import React from "react"
import Dialog from "material-ui/Dialog"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import moment from "moment"

class UpdateItemDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: null,
            amount: null,
            create_date: null
        }
        this.onChangeItem = this.onChangeItem.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
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

    onChangeDate(e, date) {
        this.setState(() => ({
            create_date: date
        }))
    }

    onUpdate() {
        const { updateItem } = this.props
        const { rental_month, id } = this.props.item
        const { item, amount, create_date: createDate } = this.state
        updateItem({
            rental_month,
            id,
            item: item || this.props.item.item,
            amount: amount || this.props.item.amount,
            create_date: createDate || this.props.item.create_date
        })
        this.onClose()
    }

    onClose() {
        // empty state when update is done
        this.setState(() => ({
            item: null,
            amount: null,
            create_date: null
        }))
        this.props.onClose()
    }

    render() {
        if (!this.props.item) return null
        const { item, amount, create_date: createDate } = this.props.item
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
                <TextField
                    id="create_date"
                    defaultValue={moment(
                        this.state.create_date || createDate
                    ).format("YYYY-MM-DD")}
                    onChange={this.onChangeDate}
                />
            </Dialog>
        )
    }
}

export default UpdateItemDialog