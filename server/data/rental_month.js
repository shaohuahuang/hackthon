import db from "../util/db"

const getRentalMonth = () =>
    db.getConnection().then(conn => conn.query("select * from rental_month"))

const addRentalMonth = month =>
    db
        .getConnection()
        .then(conn => conn.query("insert into rental_month values (?)", month))

export default {
    getRentalMonth,
    addRentalMonth
}
