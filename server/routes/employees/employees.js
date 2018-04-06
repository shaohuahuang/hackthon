const express = require("express")

const router = express.Router({
    mergeParams: true
})
const employees = require("./employees.json")

router.get("/", (req, res, next) => {
    res.json(employees)
})

module.exports = router
