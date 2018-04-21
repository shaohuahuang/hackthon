const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const routes = require("./routes/api")
const fs = require("fs")

const data = require("../data/data")

const app = express()

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// Serve static assets
app.use(express.static(path.join(__dirname, "..", "dist")))

// mount parser for applicaton/json content
app.use(bodyParser.json({ limit: "100mb" }))

app.use("/api", routes)

app.get("/api/rental-slips", (req, res) => {
    const rentalSlips = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../data/data.json"), "utf8")
    )
    res.json(rentalSlips)
})

app.post("/api/rental-slips", (req, res) => {
    const rentalSlips = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../data/data.json"), "utf8")
    )
    const { month, ...item } = req.body
    if (rentalSlips[month]) {
        rentalSlips[month].push(item)
    } else {
        rentalSlips[month] = [item]
    }
    fs.writeFileSync(
        path.join(__dirname, "../data/data.json"),
        JSON.stringify(rentalSlips, null, 2)
    )
    res.json({ success: "success" })
})

app.delete("/api/rental-slips", (req, res) => {
    const rentalSlips = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../data/data.json"), "utf8")
    )
    const { month, ...item } = req.body
    rentalSlips[month] = rentalSlips[month].filter(m => item.id !== m.id)

    fs.writeFileSync(
        path.join(__dirname, "../data/data.json"),
        JSON.stringify(rentalSlips, null, 2)
    )
    res.json({ success: "success" })
})

app.get("/api/appointments", (req, res) => {
    res.json(data)
})

// reroute all frontend routes to be handled by react-router
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
})

// Start the app
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
})
