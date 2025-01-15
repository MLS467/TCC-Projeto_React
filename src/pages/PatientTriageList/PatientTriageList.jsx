import React, { useContext, useEffect, useState } from 'react';
import SpinnerImg from '../../components/Spinner/Spinner';
import ReturnGetData from '../../Context/ReturnGetData';
import { TableList, TableHeadList, TableHeaderList, TableRowList, TableDataList, TableBodyList, TableWrapperList } from '../../components/tableList/TableStructure';
import Button from "../../components/Button/Button";


const PatientTriageList = () => {
    const handleGetData = ReturnGetData();
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await handleGetData('GET', `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_PATIENT_ENDPOINT}Completed`);
            setData(response || []);
        })();
    }, []);

    return (
        <>
            {
                data.length > 0 ?
                    <TableWrapperList>
                        <h1>Listagem de pacientes</h1>
                        <TableList>
                            <TableHeadList>
                                <TableRowList>
                                    <TableHeaderList value="Nome" />
                                    <TableHeaderList value="idade" />
                                    <TableHeaderList value="Tipo sanguíneo" />
                                    <TableHeaderList value="Pressão arterial" />
                                    <TableHeaderList value="Frequência cardíaca" />
                                    <TableHeaderList value="Saturação de oxigênio" />
                                    <TableHeaderList value="Detalhes" />
                                </TableRowList>
                            </TableHeadList>
                            <TableBodyList>
                                {data.map((item, index) => (
                                    <TableRowList key={index}>
                                        <TableDataList value={item.user.name} />
                                        <TableDataList value={item.user.age} />
                                        <TableDataList value={item.blood_type} />
                                        <TableDataList value={`${item.blood_pressure} mmHg`} />
                                        <TableDataList value={`${item.heart_rate} bpm`} />
                                        <TableDataList value={`${item.oxygen_saturation} %`} />

                                        <Button path={`/form_consultation/${btoa(item.id)}`} text="Consultar" />

                                    </TableRowList>
                                ))}
                            </TableBodyList>
                        </TableList>

                    </TableWrapperList> : <SpinnerImg
                        widthSpinner="200px"
                        heightSpinner="200px"
                        alignItems="flex-start"
                        marginTop="100px"
                    />
            }
        </>
    );

}

export default PatientTriageList;
