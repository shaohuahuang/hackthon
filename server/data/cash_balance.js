import db from "../util/db"

const getAll = () =>
    db.getConnection().then(conn => conn.query("select * from cash_balance"))

// const addItem = ({ item, amount, create_date, rental_month }) =>
//     db
//         .getConnection()
//         .then(conn =>
//             conn.query(
//                 "insert into cash_balance (item, amount, create_date, rental_month) values (?,?,?,?)",
//                 item,
//                 amount,
//                 create_date,
//                 rental_month
//             )
//         )

const addItem = item =>
    db
        .getConnection()
        .then(conn => {
            const result = conn.query(
                "insert into cash_balance (item, amount, rental_month) values (?, ?, ?)",
                [item.item, item.amount, item.rental_month]
            )
            conn.release()
            return result
        })
        .then(result => ({ id: result.insertId, ...item }))
        .catch(err => console.log(err))

const updateItem = ({ id, item, amount, rental_month: rentalMonth }) =>
    db.getConnection().then(conn => {
        const item = conn.query(
            "update cash_balance set item= ?, amount= ?, rental_month= ? where id = ?",
            [item, amount, rentalMonth, id]
        )
        conn.release()
        return item
    })

const deleteItem = id =>
    db.getConnection().then(conn => {
        const result = conn.query("delete from cash_balance where id = ?", id)
        conn.release()
        return result
    })

export default { getAll, addItem, deleteItem, updateItem }
