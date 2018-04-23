import React from "react"
import matchSorter from "match-sorter"
import moment from "moment"
import { connect } from "react-redux"

// Import React Table
import ReactTable from "react-table"
import "react-table/react-table.css"

// import { makeData } from "./Utils"
import * as actions from "../../actions"

class MyReactTable extends React.Component {
    componentDidMount() {
        this.props.fetchAppointments()
    }
    render() {
        const { appointments } = this.props
        return (
            <div>
                <ReactTable
                    data={appointments}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={[
                        {
                            columns: [
                                {
                                    Header: "Appointment ID",
                                    accessor: "id"
                                },
                                {
                                    Header: "Customer Name",
                                    accessor: "name",
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["name"]
                                        }),
                                    filterAll: true
                                },
                                {
                                    Header: "Contact Number",
                                    accessor: "contact",
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["contact"]
                                        }),
                                    filterAll: true
                                },
                                {
                                    Header: "Appointment Date",
                                    id: "date",
                                    accessor: d =>
                                        moment(d.start_time).format(
                                            "YYYY-MM-DD"
                                        )
                                },
                                {
                                    Header: "Appoinment Time",
                                    id: "time",
                                    accessor: d =>
                                        `${moment(d.start_time).format(
                                            "h:mm a"
                                        )} - ${moment(d.end_time).format(
                                            "h:mm a"
                                        )}`
                                },
                                {
                                    Header: "Reason",
                                    accessor: "reason",
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["reason"]
                                        }),
                                    filterAll: true
                                }
                                // {
                                //     Header: "Name",
                                //     id: "lastName",
                                //     accessor: d => d.lastName,
                                //     filterMethod: (filter, rows) =>
                                //         matchSorter(rows, filter.value, {
                                //             keys: ["lastName"]
                                //         }),
                                //     filterAll: true
                                // }
                            ]
                        }
                    ]}
                    defaultPageSize={20}
                    className="-striped -highlight"
                />
                <br />
            </div>
        )
    }
}

const mapStateToProps = state => ({ appointments: state.appointments })

export default connect(mapStateToProps, actions)(MyReactTable)
