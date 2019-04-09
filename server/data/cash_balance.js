import moment from "moment"
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
        .then(conn =>
            conn.query("call add_cash_balance_item(?,?,?,?)", [
                item.item,
                item.amount,
                item.create_date,
                item.rental_month
            ])
        )
        .catch(err => console.log(err))

const updateItem = ({ id, item, amount, rental_month: rentalMonth }) =>
    db
        .getConnection()
        .then(conn =>
            conn.query(
                "update cash_balance set item= ?, amount= ?, rental_month= ? where id = ?",
                [item, amount, rentalMonth, id]
            )
        )

const deleteItem = id =>
    db
        .getConnection()
        .then(conn => conn.query("delete from cash_balance where id = ?", id))

export default { getAll, addItem, deleteItem, updateItem }
