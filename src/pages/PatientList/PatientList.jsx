import React, { useContext, useEffect, useState } from 'react';
import { GetDataContext } from '../../Context/GetDataContext';
import { Table, TableHead, TableRow, TableHeader, TableData, TableWrapper } from './PatientList.Style';
import NewButton from '../../components/Button/Button';
import { IoIosPhonePortrait } from "react-icons/io";
import { MdBloodtype } from "react-icons/md";
import { FaCheck, FaHospitalUser, FaRegTrashAlt } from "react-icons/fa";
import SpinnerImg from '../../components/Spinner/Spinner';

const PatientList = () => {
    const [data, setData] = useState([]);

    const { handleGetData } = useContext(GetDataContext);

    const endpointPatients = `
    ${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_USER_ENDPOINT}/flag`;

    console.log(data);

    useEffect(() => {
        (async () => {
            const response = await handleGetData('GET', endpointPatients);
            response ? setData(response) : setData([]);
        })();
    }, []);

    return (<>
        {data.length > 0 ?
            < TableWrapper >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Nome</TableHeader>
                            <TableHeader>Idade</TableHeader>
                            <TableHeader>Tipo</TableHeader>
                            <TableHeader>Contato de emergência</TableHeader>
                            <TableHeader>Ações</TableHeader>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {data.map(item => (
                            <TableRow key={item.id}>
                                <TableData>{item.name}</TableData>
                                <TableData>{item.age} {item.age !== 1 ? "Anos" : "Ano"}</TableData>
                                <TableData><FaHospitalUser /> {item.role}</TableData>
                                <TableData><IoIosPhonePortrait /> {item.phone}</TableData>
                                <TableData>

                                    <NewButton text="enviar" path={`/form_triage/${btoa(item.id)}`} />

                                </TableData>
                            </TableRow>
                        ))}
                    </tbody>
                </Table >
            </TableWrapper >
            : <SpinnerImg
                widthSpinner="200px"
                heightSpinner="200px"
                alignItems="flex-start"
                marginTop="100px"
            />
        }
    </>
    );
};


export default PatientList;
