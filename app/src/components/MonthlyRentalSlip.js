import React from "react"
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table"

const MonthlyRentalSlip = ({ items }) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>Item</TableHeaderColumn>
                <TableHeaderColumn>Amount</TableHeaderColumn>
                <TableHeaderColumn>Date</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {items.map(item => (
                <TableRow key={item.id}>
                    <TableRowColumn>{item.item}</TableRowColumn>
                    <TableRowColumn>{item.amount}</TableRowColumn>
                    <TableRowColumn>{item.date}</TableRowColumn>
                </TableRow>
            ))}
        </TableBody>
    </Table>
)

export default MonthlyRentalSlip
