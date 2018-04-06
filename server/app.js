const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const routes = require("./routes/api")

const app = express()

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// Serve static assets
app.use(express.static(path.join(__dirname, "..", "dist", BRANDING)))

// mount parser for applicaton/json content
app.use(bodyParser.json({ limit: "100mb" }))

app.use("/api", routes)

// reroute all frontend routes to be handled by react-router
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", BRANDING, "index.html"))
})

// Start the app
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
})