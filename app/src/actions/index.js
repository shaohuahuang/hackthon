// @flow

import constants from "../constants/constants"
import { type Item } from "../types/item"
// import { isLastSecond, getLastTwoMonthsObj } from "../util/util"
import { getLastTwoMonthsObj } from "../util/util"

const receiveRentalSlips = rentalSlips => ({
    type: constants.RECEIVE_RENTAL_SLIPS,
    data: rentalSlips
})

const addItemSuccess = (item: Item) => ({
    type: constants.ADD_ITEM_SUCCESS,
    data: item
})

const updateItemSuccess = (item: Item) => ({
    type: constants.UPDATE_ITEM_SUCCESS,
    data: item
})

export const addItem = (item: Item): Function => (dispatch, store) =>
    fetch("/api/rental-slips", {
        body: JSON.stringify(item),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(res => {
            if (!res.error) {
                dispatch(addItemSuccess(res))

                const { rentalSlips } = store.getState()
                const { lastSecondMonth } = getLastTwoMonthsObj(rentalSlips)

                if (lastSecondMonth === item.rental_month) {
                    // fetch("/api/outstanding")
                }
            } else alert(res.error)
        })

const deleteItemSuccess = item => ({
    type: constants.DELETE_ITEM_SUCCESS,
    data: item
})

export const deleteItem = (item: Item): Function => dispatch =>
    fetch(`/api/rental-slips/${item.id}`, {
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
        .then((data: Object) => {
            dispatch(receiveRentalSlips(data))
        })

export const updateItem = (item: Item): Function => dispatch =>
    fetch("/api/rental-slips", {
        body: JSON.stringify(item),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(res => {
            if (!res.error) dispatch(updateItemSuccess(item))
            else alert(res.error)
        })
