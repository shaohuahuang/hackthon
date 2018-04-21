import constants from "../constants/constants"

const receiveAppointments = appointments => ({
    type: constants.RECEIVE_APPOINTMENTS,
    data: appointments
})

export const fetchAppointments = () => dispatch =>
    fetch("/api/appointments")
        .then(response => response.json())
        .then(appointments => dispatch(receiveAppointments(appointments)))
