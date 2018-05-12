import db from "../util/db"

const getAll = () =>
    db.getConnection().then(conn => conn.query("select * from outstanding"))

export default {
    getAll
}
