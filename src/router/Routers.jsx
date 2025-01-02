import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import App from '../App';
import PatientList from '../pages/PatientList/PatientList';
import Teste from '../pages/Test/Teste';
import Form from '../pages/Form/Form';

const Routers = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <div>Not Found</div>,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/PatientList',
                    element: <PatientList />
                },
                {
                    path: '/teste',
                    element: <Teste />
                },
                {
                    path: '/form_patient',
                    element: <Form />
                }
            ]

        }
    ]);


    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Routers;
