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
import ProtectedLayout from "../components/Protected/ProtectedLayout";
import Teste from '../pages/Test/Teste';
import Erro404 from '../pages/404/Erro404';

const Routers = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <Erro404 />,
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
                    path: '/teste',
                    element:
                        // <ProtectedLayout>
                        <Teste />
                    // </ProtectedLayout>
                },
                {
                    path: '/PatientList',
                    element:
                        <ProtectedLayout>
                            <PatientList />
                        </ProtectedLayout>

                },
                {
                    path: '/form_patient',
                    element:
                        <ProtectedLayout>
                            <FormBasicData />
                        </ProtectedLayout>
                },
                {
                    path: '/form_triage/:id',

                    element:
                        <ProtectedLayout>
                            <FormTriage />
                        </ProtectedLayout>
                },
                {
                    path: '/form_consultation/:id',
                    element:
                        <ProtectedLayout>
                            <FormConsultation />
                        </ProtectedLayout>
                },
                {
                    path: '/triageList',
                    element:
                        <ProtectedLayout>
                            <PatientTriageList />
                        </ProtectedLayout>
                },
                {
                    path: '/success',
                    element:
                        <ProtectedLayout>
                            <Success />
                        </ProtectedLayout>
                }
            ]
        }

    ]);



    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Routers;
