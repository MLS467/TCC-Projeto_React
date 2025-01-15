import React, { useContext, useState } from 'react';
import InputLogin from '../../components/InputLogin/InputLogin';
import { LoginContainer, LoginBoxStyle } from './Login.style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import useRequest from '../../Hook/useRequest';

const Login = () => {
    const [data, setData] = useState({});
    const { api } = useRequest();

    const endpointLogin = import.meta.env.VITE_URL_LOGIN;

    const Login = async (data) => {
        try {
            await api.post(endpointLogin, data);
            //(MUDAR) - Ajustar mensagem de sucesso
            return alert(result.token);

        } catch (error) {
            //(MUDAR) - Ajustar mensagem de erro 
            return alert("Erro ao fazer login, tente novamente!");
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Login(data);
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <LoginContainer>
            <div style={{ width: '60%', height: '100%' }}>
                <iframe
                    src="https://lottie.host/embed/ef856064-dd5a-476a-8bb5-fc8a7b3ac028/uUVrtXS5h1.lottie"
                    style={{ width: '100%', height: '100%', border: '0' }}
                    title="Lottie Animation"
                    allowFullScreen
                />
            </div>

            <LoginBoxStyle >
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div >
                        <InputLogin name='email' type='email' handleChange={handleChange} placeholder="Digite sua email" />
                        <InputLogin name='password' type='password' handleChange={handleChange} placeholder="Digite sua senha" />
                        <BtnGlobal size="form" type='submit' text='Fazer Login' />
                    </ div>
                </form>
            </LoginBoxStyle>
        </LoginContainer>
    );
}

export default Login;
