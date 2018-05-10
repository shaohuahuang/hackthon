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

export default { getAll, addItem }
