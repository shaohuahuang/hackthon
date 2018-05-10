const mysql = require("promise-mysql")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
    connectionLimit: 10
})

const getConnection = () => pool.getConnection()

export default { getConnection }
