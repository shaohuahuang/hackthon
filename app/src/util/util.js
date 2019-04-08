import constants from "../constants/constants"

export const getOutstandingOfLatestMonth = (
    prevOutstanding,
    prevRentalSlips
) => {
    const net = prevRentalSlips.reduce((memo, item) => memo + item.amount, 0)
    return prevOutstanding + net
}

export const computeOutstanding = rentalSlips => {
    const copy = { ...rentalSlips }

    let ytdOutstanding = constants.INITIAL_OUTSTANDING
    Object.keys(rentalSlips).forEach(month => {
        const slip = copy[month]
        const sum = slip.reduce((memo, item) => memo + item.amount, 0)
        copy[month] = {
            prev: ytdOutstanding,
            curr: ytdOutstanding + sum
        }
        ytdOutstanding += sum
    })
    return copy
}
