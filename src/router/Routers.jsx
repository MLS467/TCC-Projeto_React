import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import App from '../App';
import PatientList from '../pages/PatientList/PatientList';
import Teste from '../pages/Test/Teste';
import FormBasicData from '../pages/Form/FormBasicData';
import FormTriage from '../pages/FormTriage/FormTriage';
import Consultation from '../pages/Consultation/Consultation';

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
                    element: <FormBasicData />
                },
                {
                    path: '/form_triage',
                    element: <FormTriage />
                },
                {
                    path: '/form_consultation',
                    element: <Consultation />
                },
            ]

        }
    ]);


    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Routers;
