import React, { useEffect, useState } from 'react';
import InputLogin from '../../components/InputLogin/InputLogin';
import { LoginContainer, LoginBoxStyle, SpinningImSpinner8 } from './Login.style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import UseAuth from '../../Hook/UseAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [spinner, setSpinner] = useState(false);
    const { Authenticate, user } = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const role = user.role;
            console.log('regra=> ', role);

            switch (role) {
                case 'doctor':
                    navigate('/triageList');
                    break;
                case 'attendant':
                    navigate('/form_patient');
                    break;
                case 'nurse':
                    navigate('/PatientList');
                    break;
                default:
                    navigate('/login');
            }
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault(e);

        const schema = Yup.object().shape({
            email: Yup.string().email('Insira um email válido').required('Email é obrigatório'),
            password: Yup.string().required('Senha é obrigatória').min(6, 'Senha deve ter no mínimo 6 caracteres')
        });

        schema.validate(data, { abortEarly: false })
            .then(async (res) => {
                try {
                    setSpinner(true);
                    const require = await Authenticate(res?.email, res?.password);
                    setSpinner(false);
                    if (!require) throw new Error('Email ou senha inválidos');
                } catch (err) {
                    setSpinner(false);
                    toast.error(err.message || 'Erro ao autenticar');
                }
            })
            .catch((err) => {
                if (err.inner) {
                    err.inner.forEach((error) => {
                        toast.error(error.message);
                    });
                } else {
                    toast.error("Email ou senha inválidos");
                }
            });

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
                        <InputLogin name='email' type='text' handleChange={handleChange} placeholder="Digite sua email" />
                        <InputLogin name='password' type='password' handleChange={handleChange} placeholder="Digite sua senha" />
                        <BtnGlobal size="form" type='submit' text={spinner ? <SpinningImSpinner8 /> : "Fazer Login"} />
                    </ div>
                </form>
            </LoginBoxStyle>
        </LoginContainer>
    );

}


export default Login;
