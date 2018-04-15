// @flow

import constants from "../constants/constants"
import { type Item } from "../types/item"

const receiveRentalSlips = rentalSlips => ({
    type: constants.RECEIVE_RENTAL_SLIPS,
    data: rentalSlips
})

const addItemSuccess = (item: Item) => ({
    type: constants.ADD_ITEM_SUCCESS,
    data: item
})

export const addItem = (item: Item): Function => dispatch =>
    fetch("/api/rental-slips", {
        body: JSON.stringify(item),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(res => {
            if (res.success) dispatch(addItemSuccess(item))
            else alert(res.error)
        })

const deleteItemSuccess = (item: Item) => ({
    type: constants.DELETE_ITEM_SUCCESS,
    data: item
})

export const deleteItem = (item: Item): Function => dispatch =>
    fetch("/api/rental-slips", {
        body: JSON.stringify(item),
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(res => {
            if (res.success) dispatch(deleteItemSuccess(item))
            else alert(res.error)
        })

export const fetchRentalSlips = (): Function => dispatch =>
    fetch("/api/rental-slips")
        .then((response: Object) => response.json())
        .then((data: Object) => dispatch(receiveRentalSlips(data)))
