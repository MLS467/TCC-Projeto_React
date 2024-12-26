import React, { useState } from 'react';
import InputLogin from '../../components/InputLogin/InputLogin';

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
        <div>
            <h1>Login</h1>

            <div style={{ display: 'flex', flexDirection: 'column', width: '400px', height: '400px', border: '1px solid black' }}>
                <form onSubmit={handleSubmit}>
                    <InputLogin name='Email' type='email' handleChange={handleChange} />
                    <InputLogin name='Password' type='password' handleChange={handleChange} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
