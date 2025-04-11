import InputLogin from '../../components/InputLogin/InputLogin';
import { LoginContainer, SpinningImSpinner8, IframeContainer, LoginContainerStyle } from './Login.style';
import ButtonAnimation from '../../components/ButtonAnimation/ButtonAnimation';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../Context/LoginContext/LoginContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const { handleChange, handleSubmit, spinner, user } = useLogin();

    useEffect(() => {
            if (user) {
                const role = user.role;
    
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
                    case 'admin':
                        navigate('/dashboard');
                        break;
                    default:
                        toast.error('Usuário não autorizado');
                        navigate('/login');
                }
            }
    }, [user, navigate]);

    return (
        <LoginContainer>
            <IframeContainer>
                <iframe
                    src="https://lottie.host/embed/ef856064-dd5a-476a-8bb5-fc8a7b3ac028/uUVrtXS5h1.lottie"
                    title="Lottie Animation"
                    allowFullScreen
                />
            </IframeContainer>

            <LoginContainerStyle>
                <div className='login_container'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <InputLogin name='email' type='text' handleChange={handleChange} placeholder="Digite sua email" />
                            <InputLogin name='password' type='password' handleChange={handleChange} placeholder="Digite sua senha" />
                            {/* <BtnGlobal size="form" type='submit' text={spinner ? <SpinningImSpinner8 /> : "Fazer Login"} /> */}
                            <ButtonAnimation type={1} submit={true} text={spinner ? <SpinningImSpinner8 /> : "Fazer Login"} />
                        </ div>
                    </form>
                    <div>
                        <Link to="#" ><span>Solicitar mudança de senha</span><span>clique aqui</span></Link>
                    </div>
                </div>
            </LoginContainerStyle >
        </LoginContainer>
    );

}


export default Login;
