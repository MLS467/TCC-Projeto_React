import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import InputForm from '../../components/Form/InputForm';

const Teste = () => {
    const [data, setData] = React.useState({});

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    };
    console.log(data);

    return (
        <div>
            <InputForm name="Nome" placeholder={"Digite seu nome aqui"} handleChange={handleChange} />
            <InputForm name="Sobrenome" handleChange={handleChange} />
            <InputForm name="Senha" type="password" handleChange={handleChange} />
            <InputForm name="data" type="date" handleChange={handleChange} />
        </div>
    );
}

export default Teste;
