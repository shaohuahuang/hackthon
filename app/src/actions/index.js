// @flow

import constants from "../constants/constants"
import { type Item } from "../types/item"
// import { isLastSecond, getLastTwoMonthsObj } from "../util/util"
import { fetchOutstandings } from "./outstanding-actions"

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
                dispatch(fetchOutstandings()) // need to fetch the outstanding again upon modification
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
            if (res.success) {
                dispatch(deleteItemSuccess(item))
                dispatch(fetchOutstandings())
            } else alert(res.error)
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
            if (!res.error) {
                dispatch(updateItemSuccess(item))
                dispatch(fetchOutstandings())
            } else alert(res.error)
        })
