import React from 'react';
import { Table, TableBody, TableWrapper } from '../../pages/PatientList/PatientList.Style';
import { TableHead } from '../../pages/PatientList/PatientList.Style';
import { TableHeader } from '../../pages/PatientList/PatientList.Style';
import { TableData } from '../../pages/PatientList/PatientList.Style';
import { TableRow } from '../../pages/PatientList/PatientList.Style';


export const TableBodyList = ({ children }) => {

    return (
        <TableBody >
            {children}
        </TableBody>
    );
}

export const TableList = ({ children }) => {
    return (
        <Table>
            {children}
        </Table>
    );
}

export const TableHeadList = ({ children }) => {
    return (
        <TableHead>
            {children}
        </TableHead>
    );
}

export const TableHeaderList = ({ value }) => {
    return (
        <TableHeader>{value}</TableHeader>
    );
}

export const TableDataList = ({ value }) => {
    return (
        <TableData>
            {value}
        </TableData>
    );
}

export const TableRowList = ({ children }) => {
    return (
        <TableRow>
            {children}
        </TableRow>
    );
}

export const TableWrapperList = ({ children }) => {
    return (
        <TableWrapper>
            {children}
        </TableWrapper>
    );
}