const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const https = require("https")
const fs = require("fs")

const session = require("express-session")
const passport = require("passport")
const cookieParser = require("cookie-parser")
const openidconnect = require("passport-idaas-openidconnect")

const routes = require("./routes/api")

const app = express()

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// Serve static assets
app.use(express.static(path.join(__dirname, "..", "dist")))

// mount parser for applicaton/json content
app.use(bodyParser.json({ limit: "100mb" }))

//= =================================================
app.use(cookieParser())
app.use(
    session({
        resave: "true",
        saveUninitialized: "true",
        secret: "keyboard cat"
    })
)
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((obj, done) => {
    done(null, obj)
})

const clientID = "OTIwYmI3YjEtMDdiNC00"
const clientSecret = "NWY4MDAwOWQtZWM4ZS00"
const authorizationURL =
    "https://prepiam.toronto.ca.ibm.com/idaas/oidc/endpoint/default/authorize"
const tokenURL =
    "https://prepiam.toronto.ca.ibm.com/idaas/oidc/endpoint/default/token"
const issuerID = "https://prepiam.toronto.ca.ibm.com"
const callbackURL = "https://localhost:3000/auth/sso/callback"

const OpenIDConnectStrategy = openidconnect.IDaaSOIDCStrategy
const Strategy = new OpenIDConnectStrategy(
    {
        authorizationURL,
        tokenURL,
        clientID,
        scope: "openid",
        response_type: "code",
        clientSecret,
        callbackURL,
        skipUserProfile: true,
        issuer: issuerID
    },
    (iss, sub, profile, accessToken, refreshToken, params, done) => {
        process.nextTick(() => {
            profile.accessToken = accessToken
            profile.refreshToken = refreshToken
            done(null, profile)
        })
    }
)
passport.use(Strategy)

app.get("/login", passport.authenticate("openidconnect", {}))
function ensureAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
        req.session.originalUrl = req.originalUrl
    } else {
        res.redirect("/login")
    }
    return next()
}

// handle callback, if authentication succeeds redirect to
// original requested url, otherwise go to /failure
app.get("/auth/sso/callback", (req, res, next) => {
    const redirectURL = req.session.originalUrl
    passport.authenticate("openidconnect", {
        successRedirect: redirectURL,
        failureRedirect: "/failure"
    })(req, res, next)
})
// failure page
app.get("/failure", (req, res) => {
    res.send("login failed")
})

app.get("/hello", ensureAuthenticated, (req, res) => {
    const claims = req.user._json
    console.log(req)
    res.send(
        `<h2> Hello ${claims.firstName}${claims.familyName}<br /> Welcome to BlueID Demo App</h2>`
    )
})
//= =================================================

app.use("/api", routes)

// reroute all frontend routes to be handled by react-router
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
})

// // Start the app
// app.listen(HTTP_PORT, () => {
//     console.log(`Listening on port ${HTTP_PORT}`)
// })

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("server.crt")
}

// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(HTTP_PORT)
