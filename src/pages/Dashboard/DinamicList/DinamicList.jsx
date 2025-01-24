import React, { useContext, useEffect, useState } from 'react';
import {
    TableWrapperList, TableList, TableHeadList,
    TableRowList, TableHeaderList, TableBodyList, TableDataList
} from '../../../components/tableList/TableStructure';
import SpinnerImg from '../../../components/Spinner/Spinner';
import BtnGlobal from '../../../components/ButtonGlobal/BtnGlobal';
import { DashboardContext } from '../../../Context/DashboardContext/DashboardContext';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { IoIosAddCircleOutlineStyle } from '../Dashboard.style';
import { useParams } from 'react-router-dom';

const DinamicList = () => {

    const { tipo } = useParams();

    const dashboradContext = useContext(DashboardContext);

    useEffect(() => {
        dashboradContext.requestControle(tipo);
    }, [tipo]);
    useEffect(() => {
        alert("Listagem de " + dashboradContext.controle);
    }, [dashboradContext.controle]);

    if (!dashboradContext.data) {
        return <SpinnerImg
            $widthSpinner="200px"
            $heightSpinner="200px"
            $alignItems="flex-start"
            $marginTop="100px"
        />
    }

    return (
        <>
            {dashboradContext.data.length > 0 ? (<TableWrapperList>
                <h1>Listagem de {dashboradContext.controle}</h1>
                <IoIosAddCircleOutlineStyle onClick={() => alert("Adicionou algo")} />
                <TableList>
                    <TableHeadList>
                        <TableRowList>
                            <TableHeaderList value="Nome" />
                            <TableHeaderList value="idade" />
                            <TableHeaderList value="Tipo sanguíneo" />
                            <TableHeaderList value="Pressão arterial" />
                            <TableHeaderList value="Frequência cardíaca" />
                            <TableHeaderList value="Saturação de oxigênio" />
                            <TableHeaderList value="Ações" />
                        </TableRowList>
                    </TableHeadList>
                    <TableBodyList>
                        {dashboradContext.data.map((item, index) => (
                            <TableRowList key={index}>
                                <TableDataList value={item.user.name} />
                                <TableDataList value={item.user.age} />
                                <TableDataList value={item.blood_type} />
                                <TableDataList value={`${item.blood_pressure} mmHg`} />
                                <TableDataList value={`${item.heart_rate} bpm`} />
                                <TableDataList value={`${item.oxygen_saturation} %`} />

                                <td>
                                    <CiEdit style={{ height: "30px", width: "30px", }} />
                                    <CiTrash onClick={() => dashboradContext.requestDelete(item.id, item.role)} style={{ height: "30px", width: "30px" }} />
                                </td>
                            </TableRowList>
                        ))}
                    </TableBodyList>
                </TableList>

            </TableWrapperList>)
                :
                <SpinnerImg
                    $widthSpinner="200px"
                    $heightSpinner="200px"
                    $alignItems="flex-start"
                    $marginTop="100px"
                />
            }
        </ >
    );
}

export default DinamicList;
