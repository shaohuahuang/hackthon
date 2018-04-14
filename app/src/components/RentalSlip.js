import React from "react"
import { List, ListItem } from "material-ui/List"
import { connect } from "react-redux"
import * as actions from "../actions"

class RentalSlip extends React.Component {
    componentDidMount() {
        this.props.fetchRentalSlips()
    }

    render() {
        const { rentalSlips } = this.props
        return (
            <List>
                {Object.keys(rentalSlips).map(key => (
                    // const monthlySlip = rentalSlips[key]
                    <ListItem key={key} primaryText={key} />
                ))}

                {/* <ListItem primaryText={"Send Mail"} />*/}
                {/* <ListItem primaryText={"Drafts"} />*/}
                {/* <ListItem*/}
                {/* primaryText={"Inbox"}*/}
                {/* nestedItems={[*/}
                {/* <ListItem primaryText={"Starred"} />,*/}
                {/* <ListItem primaryText={"Sent Mail"} />*/}
                {/* ]}*/}
                {/* />*/}
            </List>
        )
    }
}

const mapStateToProps = state => ({ rentalSlips: state.rentalSlips })

export default connect(mapStateToProps, actions)(RentalSlip)
