import React from "react"
import AppBar from "material-ui/AppBar"

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
                    title="DBS Asian Hub"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.onToggleMenu}
                />
            </div>
        )
    }
}

export default MyAppBar
