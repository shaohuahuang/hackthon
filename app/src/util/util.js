export const isLastTwoMonth = (month, lastTwoMonths) => {
    const find = lastTwoMonths.find(m => m === month)
    return !!find
}

export const getLastTwoMonths = rentalSlips => {
    const keys = Object.keys(rentalSlips)
    if (keys.length <= 2) return keys
    return keys.slice(-2)
}

export const getLastTwoMonthsObj = rentalSlips => {
    const keys = Object.keys(rentalSlips)
    if (keys.length === 1) return { lastSecondMonth: null, lastMonth: keys[0] }
    const arr = keys.slice(-2)
    return { lastSecondMonth: arr[0], lastMonth: arr[1] }
}

export const isLastSecond = (rentalSlips, rentalMonth) => {
    const lastTwoMonths = getLastTwoMonths(rentalSlips)
    if (lastTwoMonths.length === 1) return false
    return lastTwoMonths[0] === rentalMonth
}

export const getOutstandingOfLatestMonth = (
    prevOutstanding,
    prevRentalSlips
) => {
    const net = prevRentalSlips.reduce((memo, item) => memo + item.amount, 0)
    return prevOutstanding + net
}
