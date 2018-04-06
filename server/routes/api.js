const express = require("express")

const router = express.Router({
    mergeParams: true
})

const employees = require("./employees/employees")

router.use("/employees", employees)

module.exports = router
