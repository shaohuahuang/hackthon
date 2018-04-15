import React from "react"
import AppBar from "material-ui/AppBar"
import Drawer from "material-ui/Drawer"

class MyAppBar extends React.Component {
    constructor() {
        super()
        this.state = { open: false }
        this.onToggleMenu = this.onToggleMenu.bind(this)
    }

    onToggleMenu() {
        this.setState(() => ({ open: !this.state.open }))
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.onToggleMenu}
                />
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
            </div>
        )
    }
}

export default MyAppBar
