import React from "react"
import Dialog from "material-ui/Dialog"
import RaisedButton from "material-ui/RaisedButton"

class AddItemDialog extends React.Component {
    constructor() {
        super()
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete() {
        this.props.onDelete()
        this.props.onClose()
    }

    render() {
        const actionButtons = [
            <RaisedButton
                label="Delete"
                primary
                keyboardFocused
                onClick={this.onDelete}
            />
        ]
        return (
            <Dialog
                title="Dialog With Date Picker"
                actions={actionButtons}
                modal={false}
                open={this.props.isOpen}
                onRequestClose={this.props.onClose}
            >
                Do you want to delete this item?
            </Dialog>
        )
    }
}

export default AddItemDialog