import db from "../util/db"

const getRentalMonth = () =>
    db.getConnection().then(conn => conn.query("select * from rental_month"))

export default {
    getRentalMonth
}
