import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import moment from "moment"
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table"

import * as actions from "../actions"

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchAppointments()
    }
    render() {
        const { appointments } = this.props
        return (
            <Table selectable={false}>
                <TableHeader displaySelectAll={false}>
                    <StyledTableRow selectable={false}>
                        <TableHeaderColumn>Appointment ID</TableHeaderColumn>
                        <TableHeaderColumn>Customer Name</TableHeaderColumn>
                        <TableHeaderColumn>Contact Number</TableHeaderColumn>
                        <TableHeaderColumn>Appointment Date</TableHeaderColumn>
                        <TableHeaderColumn>Appointment Time</TableHeaderColumn>
                        <TableHeaderColumn>
                            Appointment Reason
                        </TableHeaderColumn>
                    </StyledTableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {appointments.map(appointment => (
                        <TableRow key={appointment.id}>
                            <TableRowColumn>{appointment.id}</TableRowColumn>
                            <TableRowColumn>{appointment.name}</TableRowColumn>
                            <TableRowColumn>
                                {appointment.contact}
                            </TableRowColumn>
                            <TableRowColumn>
                                {moment(appointment.start_time).format(
                                    "YYYY-MM-DD"
                                )}
                            </TableRowColumn>
                            <TableRowColumn>
                                {`${moment(appointment.start_time).format(
                                    "h:mm a"
                                )} - ${moment(appointment.end_time).format(
                                    "h:mm a"
                                )}`}
                            </TableRowColumn>
                            <TableRowColumn>
                                {appointment.reason}
                            </TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

const StyledTableRow = styled(TableRow)`
    th:first-child {
        width: 0 !important;
    }
    th {
        font-size: 16px !important;
        color: black !important;
    }
`

// const StyledTableHeaderColumn = styled(TableHeaderColumn)`
//     font-size:
// `

const mapStateToProps = state => ({ appointments: state.appointments })

export default connect(mapStateToProps, actions)(Dashboard)
