import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import App from '../App';
import PatientList from '../pages/PatientList/PatientList';
import FormBasicData from '../pages/Form/FormBasicData';
import FormTriage from '../pages/FormTriage/FormTriage';
import FormConsultation from '../pages/FormConsultation/FormConsultation';
import PatientTriageList from '../pages/PatientTriageList/PatientTriageList';
import Success from '../pages/Success/Success';

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
                    path: '/form_patient',
                    element: <FormBasicData />
                },
                {
                    path: '/form_triage/:id',
                    element: <FormTriage />
                },
                {
                    path: '/form_consultation/:id',
                    element: <FormConsultation />
                },
                {
                    path: '/triageList',
                    element: <PatientTriageList />
                },
                {
                    path: '/success',
                    element: <Success />
                }
            ]
        }

    ]);



    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Routers;
