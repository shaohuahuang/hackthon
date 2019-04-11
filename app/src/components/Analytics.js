import React from "react"
import { connect } from "react-redux"

import { getPeriod } from "../util/util"

const Analytics = props => {
    const params = new URLSearchParams(location.search)
    const rentalMonth = params.get("rental_month")
    const prevOutstanding = params.get("prev")
    const currOutstanding = params.get("curr")
    const { curr } = getPeriod(rentalMonth)
    return (
        <div>
            <p style={{ lineHeight: "0" }}>Outstanding: {prevOutstanding}</p>

            {props.rentalSlips[rentalMonth].map(slipItem => (
                <p
                    style={{ lineHeight: "0" }}
                    key={slipItem.id}
                >{`${slipItem.item}: ${slipItem.amount}`}</p>
            ))}

            <p style={{ lineHeight: "0" }}>Period: {curr}</p>
            <p style={{ lineHeight: "0" }}>Outstanding: {currOutstanding}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    rentalSlips: state.rentalSlips
})

export default connect(mapStateToProps)(Analytics)
