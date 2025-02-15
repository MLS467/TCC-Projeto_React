import React, { useContext, useEffect } from 'react';
import {
    TableWrapperList, TableList, TableHeadList,
    TableRowList, TableHeaderList, TableBodyList, TableDataList
} from '../../../components/tableList/TableStructure';
import SpinnerImg from '../../../components/Spinner/Spinner';
import { DashboardContext } from '../../../Context/DashboardContext/DashboardContext';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { Link, useParams } from 'react-router-dom';
import { ContainerDashboard, HeaderDashboardStyle } from './DinamicList.style';

const DinamicList = () => {

    const { tipo } = useParams();

    const dashboradContext = useContext(DashboardContext);
    // const dataList =  || [];

    useEffect(() => {
        dashboradContext.requestControle(tipo);
    }, [tipo]);


    if (!dashboradContext.data?.data) {
        return <SpinnerImg
            $widthSpinner="200px"
            $heightSpinner="200px"
            $alignItems="flex-start"
            $marginTop="100px"
        />
    }

    return (
        <>
            {dashboradContext.data?.data.length > 0 ? (<TableWrapperList>
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
                        {dashboradContext.data?.data.map((item, index) => (
                            <TableRowList key={index}>
                                <TableDataList value={item.user.name} />
                                <TableDataList value={item.user.age} />
                                <TableDataList value={item.user.email} />
                                <TableDataList value={item.user.cpf} />
                                <TableDataList value={item.specialty ?? "Nulo"} />
                                <TableDataList value={item.active ? "Sim" : "Não"} />

                                <ContainerDashboard>
                                    <Link to={`/dashboard/edit_funcionario/${tipo}/${item.id}`}><CiEdit className="btnDash btn_edit" /></Link>
                                    <CiTrash className="btnDash btn_delete" onClick={() => dashboradContext.requestDelete(item.id, item.user.role)} />
                                </ContainerDashboard>
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
