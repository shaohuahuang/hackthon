import React from "react"
import { List, ListItem } from "material-ui/List"
import { connect } from "react-redux"

import styled from "styled-components"
import muiThemeable from "material-ui/styles/muiThemeable"

import * as actions from "../actions"
import * as selectActions from "../actions/select-actions"
import * as outstandingActions from "../actions/outstanding-actions"
import MonthlyRentalSlip from "./MonthlyRentalSlip"
import {computeOutstanding} from "../util/util"

class RentalSlip extends React.Component {
    componentDidMount() {
        this.props.fetchRentalSlips()
    }

    render() {
        const { rentalSlips, muiTheme  } = this.props
        const outstandings = computeOutstanding(rentalSlips)

      return (
            <List>
                {Object.keys(rentalSlips).map(month => {
                    let monthlySlip = rentalSlips[month]
                    let outstanding = outstandings[month]
                  return <StyledListItem
                    key={month}
                    data-theme={muiTheme}
                    disabled
                    nestedItems={[
                      <MonthlyRentalSlip
                        key="monthly"
                        items={monthlySlip}
                        month={month}
                        prevOutstanding={outstanding.prev}
                        ytdOutstanding={outstanding.curr}
                      />
                    ]}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <p>{month}</p>
                      <p>
                        Outstanding:{outstanding.curr.toFixed(2)}
                        {/*{outstandings[month]*/}
                        {/*? outstandings[month].outstanding*/}
                        {/*: null}*/}
                      </p>
                    </div>
                  </StyledListItem>
                })}

            </List>
        )
    }
}

const StyledListItem = styled(ListItem)`
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    border: ${props =>
  `1px solid ${props["data-theme"].rentalSlip.borderColor} !important`};
`

const mapStateToProps = state => ({
    rentalSlips: state.rentalSlips,
    outstandings: state.outstandings
})

export default muiThemeable()(
    connect(mapStateToProps, {
        ...actions,
        ...selectActions,
        ...outstandingActions
    })(RentalSlip)
)
