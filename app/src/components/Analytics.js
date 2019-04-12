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
        <div style={{ marginLeft: "10px", width: "300px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Outstanding:</div>
                <div> {prevOutstanding} </div>
            </div>
            <br />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Period:</div>
                <div> {curr} </div>
            </div>

            {props.rentalSlips[rentalMonth].map(slipItem => (
                <div
                    key={slipItem.id}
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>{slipItem.item}:</div>
                    <div> {slipItem.amount} </div>
                </div>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Outstanding:</div>
                <div> {currOutstanding} </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    rentalSlips: state.rentalSlips
})

export default connect(mapStateToProps)(Analytics)
