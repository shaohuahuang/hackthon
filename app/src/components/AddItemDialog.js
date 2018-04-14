import React, { Fragment } from "react"
import Dialog from "material-ui/Dialog"
import RaisedButton from "material-ui/RaisedButton"
import FlatButton from "material-ui/FlatButton"

class AddItemDialog extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleOpen() {
        this.setState({ open: true })
    }

    handleClose() {
        this.setState({ open: false })
    }

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary
                keyboardFocused
                onClick={this.handleClose}
            />
        ]
        return (
            <Fragment>
                <RaisedButton label="Add Item" onClick={this.handleOpen} />
                <Dialog
                    title="Dialog With Date Picker"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Open a Date Picker dialog from within a dialog.
                    {/* <DatePicker hintText="Date Picker" />*/}
                </Dialog>
            </Fragment>
        )
    }
}

export default AddItemDialog
