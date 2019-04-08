export const getOutstandingOfLatestMonth = (
    prevOutstanding,
    prevRentalSlips
) => {
    const net = prevRentalSlips.reduce((memo, item) => memo + item.amount, 0)
    return prevOutstanding + net
}
