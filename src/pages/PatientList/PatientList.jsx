import React, { useContext, useEffect, useState } from 'react';
import { GetDataContext } from '../../Context/GetDataContext';
import { Table, TableHead, TableRow, TableHeader, TableData, TableWrapper } from './PatientList.Style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import { IoIosPhonePortrait } from "react-icons/io";
import { MdBloodtype } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa";
import SpinnerImg from '../../components/Spinner/Spinner';

const PatientList = () => {
    const [data, setData] = useState([]);

    const { handleGetData } = useContext(GetDataContext);

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                const response = await handleGetData('GET', 'http://localhost:5000/patient');
                setData(response);
            })();
        }, 2000)
    }, []);


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
                                <TableData>{item.name}</TableData>
                                <TableData>{item.age} {item.age !== 1 ? "Anos" : "Ano"}</TableData>
                                <TableData><FaHospitalUser /> {item.role}</TableData>
                                <TableData color="#dc3545"> <MdBloodtype />{item.blood_type}</TableData>
                                <TableData><IoIosPhonePortrait /> {item.emergency_contact}</TableData>
                                <TableData>
                                    <BtnGlobal text="Consultar" btnBgColor={'#28a745'} btnColor="#fff" />
                                    <BtnGlobal text="Excluir" btnBgColor={'#dc3545'} btnColor="#fff" />
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
