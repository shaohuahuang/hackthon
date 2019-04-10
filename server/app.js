import rentalMonth from "./data/rental_month"
import cashBalance from "./data/cash_balance"
import { getCurrRentalMonth } from "../common/util"

const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const routes = require("./routes/api")

const app = express()

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// Serve static assets
app.use(express.static(path.join(__dirname, "..", "dist")))

// mount parser for applicaton/json content
app.use(bodyParser.json({ limit: "100mb" }))

app.use("/api", routes)

app.get("/api/rental-slips", (req, res) => {
    cashBalance
        .getAll()
        .then(items => {
            const itemsGroupByRentalMonth = items.reduce((memo, item) => {
                const arr = memo[item.rental_month]
                if (arr) {
                    arr.push(item)
                } else {
                    memo[item.rental_month] = [item]
                }
                return memo
            }, {})
            const curr = getCurrRentalMonth()
            if (!itemsGroupByRentalMonth[curr])
                itemsGroupByRentalMonth[curr] = []
            res.json(itemsGroupByRentalMonth)
        })
        .catch(err => {
            console.log(err)
            res.json({ error: "Fail to fetch rental-slips" })
        })
})

app.post("/api/rental-slips", (req, res) => {
    const item = req.body
    cashBalance
        .addItem(item)
        .then(returnedItem => res.json(returnedItem))
        .catch(err => {
            console.log(err)
            res.json({ error: err.message })
        })
})

app.put("/api/rental-slips", (req, res) => {
    const item = req.body
    cashBalance
        .updateItem(item)
        .then(() => res.json({ success: "success" }))
        .catch(err => {
            console.log(err)
            res.json({ error: err.message })
        })
})

app.delete("/api/rental-slips/:id", (req, res) => {
    const id = req.params.id
    cashBalance
        .deleteItem(id)
        .then(() => res.json({ success: "success" }))
        .catch(err => {
            console.log(err)
            res.json({ error: err.message })
        })
})

app.get("/api/rental-months", (req, res) => {
    rentalMonth
        .getRentalMonth()
        .then(months => res.json(months))
        .catch(err => {
            console.log(err)
            res.json({ error: "error" })
        })
})

// reroute all frontend routes to be handled by react-router
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
})

// Start the app
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
})
