import React, { useState } from 'react';
import InputLogin from '../../components/InputLogin/InputLogin';
import { LoginContainer, LoginBoxStyle } from './Login.style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';

const Login = () => {
    const [data, setData] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }



    return (
        <LoginContainer>
            <div style={{ width: '60%', height: '100%' }}>
                <iframe style={{ width: '100%', height: '100%', border: 'none', outline: 'none' }}
                    src="https://lottie.host/embed/ef856064-dd5a-476a-8bb5-fc8a7b3ac028/uUVrtXS5h1.lottie">
                </iframe>
            </div>

            <LoginBoxStyle >
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Login</h1>
                        <InputLogin name='Email' type='email' handleChange={handleChange} placeholder="Digite sua email" />
                        <InputLogin name='Password' type='password' handleChange={handleChange} placeholder="Digite sua senha" />
                        <BtnGlobal type='submit' text='Fazer Login' />
                    </div>

                </form>
            </LoginBoxStyle>
        </LoginContainer>
    );
}

export default Login;
