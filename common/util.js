import moment from "moment"

export const getCurrRentalMonth = () => {
    const day = moment().date()

    if (day <= 22) return moment().format("YYYY-MM")
    return moment()
        .add(1, "month")
        .format("YYYY-MM")
}
