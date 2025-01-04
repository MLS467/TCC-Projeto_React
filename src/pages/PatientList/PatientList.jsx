import React, { useContext, useEffect, useState } from 'react';
import { GetDataContext } from '../../Context/GetDataContext';
import { Table, TableHead, TableRow, TableHeader, TableData, TableWrapper } from './PatientList.Style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import { IoIosPhonePortrait } from "react-icons/io";
import { MdBloodtype } from "react-icons/md";
import { FaCheck, FaHospitalUser, FaRegTrashAlt } from "react-icons/fa";
import SpinnerImg from '../../components/Spinner/Spinner';

const PatientList = () => {
    const [data, setData] = useState([]);

    const { handleGetData } = useContext(GetDataContext);

    const endpointPatients = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_PATIENT_ENDPOINT}`;


    useEffect(() => {
        (async () => {
            const response = await handleGetData('GET', endpointPatients);
            response.data ? setData(response.data) : setData([]);
        })();
    }, []);

    console.log(data);
    return (<>
        {data.length > 0 ?
            < TableWrapper >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>#Id</TableHeader>
                            <TableHeader>Nome</TableHeader>
                            <TableHeader>Idade</TableHeader>
                            <TableHeader>Tipo</TableHeader>
                            <TableHeader>Tipo sanguíneo</TableHeader>
                            <TableHeader>Contato de emergência</TableHeader>
                            <TableHeader>Ações</TableHeader>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {data.map(item => (
                            <TableRow key={item.id}>
                                <TableData>{"#" + item.id}</TableData>
                                <TableData>{item.user.name}</TableData>
                                <TableData>{item.user.age} {item.user.age !== 1 ? "Anos" : "Ano"}</TableData>
                                <TableData><FaHospitalUser /> {item.user.role}</TableData>
                                <TableData color="#dc3545"> <MdBloodtype />{item.blood_type}</TableData>
                                <TableData><IoIosPhonePortrait /> {item.emergency_contact}</TableData>
                                <TableData>

                                    <BtnGlobal fontSize="14px"
                                        text={
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <FaCheck />
                                                Enviar
                                            </span>
                                        } size="m" btnBgColor={'#1e8bcc'} btnColor="#fff" />

                                    <BtnGlobal fontSize="14px" text={
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FaRegTrashAlt />
                                            Excluir
                                        </span>
                                    } size="m" btnBgColor={'#dc3545'} btnColor="#fff" />
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
