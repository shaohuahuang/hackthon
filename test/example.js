// import sinon from "sinon"
import assert from "assert"
import moment from "moment"

describe("test example", () => {
    it("test once", () => {
        assert.equal(1, 1)
    })

    it("test moment", () => {
        assert.equal(moment("2014-12-10").date(), 10)
        assert.equal(moment("2014-12-10").month(), 11)
        assert.equal(moment("2014-12-10").year(), 2014)
        assert.equal(
            moment("2014-12-10")
                .add(1, "month")
                .format("YYYY-MM"),
            "2015-01"
        )
    })
})
