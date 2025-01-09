import React, { useState } from 'react';
import {
    TableList,
    TableHeadList,
    TableHeaderList,
    TableRowList,
    TableDataList,
    TableBodyList,
    TableWrapperList,
} from '../../components/tableList/TableStructure';

const Teste = () => {
    const [teste, setTeste] = useState([
        { nome: 'João', idade: 20, peso: 70 },
        { nome: 'Maria', idade: 25, peso: 60 },
        { nome: 'José', idade: 30, peso: 80 },
        { nome: 'Pedro', idade: 35, peso: 90 },
        { nome: 'Ana', idade: 40, peso: 50 },
    ]);


    return (
        <TableWrapperList>
            <TableList>
                <TableHeadList>
                    <TableRowList>
                        <TableHeaderList value="Nome" />
                        <TableHeaderList value="idade" />
                        <TableHeaderList value="peso" />
                    </TableRowList>
                </TableHeadList>
                <TableBodyList>
                    {teste.map((item, index) => (
                        <TableRowList key={index}>
                            <TableDataList value={item.nome} />
                            <TableDataList value={item.idade} />
                            <TableDataList value={item.peso} />
                        </TableRowList>
                    ))}
                </TableBodyList>
            </TableList>
        </TableWrapperList>
    );
}

export default Teste;
