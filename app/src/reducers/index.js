import { combineReducers } from "redux"
import rentalSlips from "./rental-slips"
import dialog from "./dialog"
import outstandings from "./outstandings"

const appData = combineReducers({
    rentalSlips,
    dialog,
    outstandings
})

export default appData
