import React, { useContext, useEffect } from 'react';
import {
    TableWrapperList, TableList, TableHeadList,
    TableRowList, TableHeaderList, TableBodyList, TableDataList
} from '../../../components/tableList/TableStructure';
import SpinnerImg from '../../../components/Spinner/Spinner';
import { DashboardContext } from '../../../Context/DashboardContext/DashboardContext';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { IoIosAddCircleOutlineStyle } from '../Dashboard.style';
import { Link, useParams } from 'react-router-dom';
import { HeaderDashboardStyle } from './DinamicList.style';

const DinamicList = () => {

    const { tipo } = useParams();

    const dashboradContext = useContext(DashboardContext);
    const dataList = dashboradContext.data.data;

    useEffect(() => {
        dashboradContext.requestControle(tipo);
    }, [tipo]);


    if (!dataList) {
        return <SpinnerImg
            $widthSpinner="200px"
            $heightSpinner="200px"
            $alignItems="flex-start"
            $marginTop="100px"
        />
    }

    return (
        <>
            {dataList.length > 0 ? (<TableWrapperList>
                <HeaderDashboardStyle>
                    <h1>Listagem de {dashboradContext.updateTitle()}</h1>
                </HeaderDashboardStyle>

                <TableList>
                    <TableHeadList>
                        <TableRowList>
                            <TableHeaderList value="Nome" />
                            <TableHeaderList value="idade" />
                            <TableHeaderList value="Email" />
                            <TableHeaderList value="Cpf" />
                            <TableHeaderList value="Especialidade" />
                            <TableHeaderList value="Ativo" />
                            <TableHeaderList value="Ações" />
                        </TableRowList>
                    </TableHeadList>
                    <TableBodyList>
                        {dataList.map((item, index) => (
                            <TableRowList key={index}>
                                <TableDataList value={item.user.name} />
                                <TableDataList value={item.user.age} />
                                <TableDataList value={item.user.email} />
                                <TableDataList value={item.user.cpf} />
                                <TableDataList value={item.specialty ?? "Nulo"} />
                                <TableDataList value={item.active ? "Sim" : "Não"} />

                                <td>
                                    <CiEdit style={{ height: "30px", width: "30px", }} />
                                    <CiTrash onClick={() => dashboradContext.requestDelete(item.id, item.user.role)} style={{ height: "30px", width: "30px" }} />
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
