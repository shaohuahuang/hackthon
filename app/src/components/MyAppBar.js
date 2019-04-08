import React from "react"
import AppBar from "material-ui/AppBar"
import Drawer from "material-ui/Drawer"
import RaisedButton from "material-ui/RaisedButton"
import AddItemDialog from "./AddItemDialog"

class MyAppBar extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false,
            isAddItemDialogOpen: false
        }
        this.onToggleMenu = this.onToggleMenu.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    onToggleMenu() {
        this.setState(() => ({ open: !this.state.open }))
    }

    handleOpen() {
        this.setState({ isAddItemDialogOpen: true })
    }

    handleClose() {
        this.setState({ isAddItemDialogOpen: false })
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.onToggleMenu}
                >
                    <RaisedButton label="Add Item" onClick={this.handleOpen} />
                </AppBar>
                <Drawer
                    width={200}
                    docked={false}
                    open={this.state.open}
                    onRequestChange={this.onToggleMenu}
                >
                    <AppBar
                        title="AppBar"
                        onLeftIconButtonTouchTap={this.onToggleMenu}
                    />
                </Drawer>
                <AddItemDialog
                    isOpen={this.state.isAddItemDialogOpen}
                    handleClose={this.handleClose}
                    onAdd={this.props.addItem}
                />
            </div>
        )
    }
}

export default MyAppBar
