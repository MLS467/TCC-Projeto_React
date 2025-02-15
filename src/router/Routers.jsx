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
import Dashboard from '../pages/Dashboard/Dashboard';
import Erro404 from '../pages/404/Erro404';
import DinamicList from '../pages/Dashboard/DinamicList/DinamicList';
import EmployeesForm from '../pages/Dashboard/DashboardForm/EmployeesForm';
import WelcomeDashboard from '../pages/Dashboard/DashboardWelcome/welcomeDashboard';
import DashboardEdit from '../pages/Dashboard/DashboardEdit/DashboardEdit';
import DashboardFormUpdate from '../pages/Dashboard/DashboardEdit/DashboardFormUpdate';

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
                    element: <Teste />
                },
                {
                    path: '/PatientList',
                    element:
                        // <ProtectedLayout>
                        <PatientList />
                    // <ProtectedLayout>

                },
                {
                    path: '/form_patient',
                    element:
                        // <ProtectedLayout>
                        <FormBasicData />
                    // <ProtectedLayout>
                },
                {
                    path: '/form_triage/:id',

                    element:
                        // <ProtectedLayout>
                        <FormTriage />
                    // <ProtectedLayout>
                },
                {
                    path: '/form_consultation/:id',
                    element:
                        // <ProtectedLayout>
                        <FormConsultation />
                    // <ProtectedLayout>
                },
                {
                    path: '/triageList',
                    element:
                        // <ProtectedLayout>
                        <PatientTriageList />
                    // <ProtectedLayout>
                },
                {
                    path: '/success',
                    element:
                        // <ProtectedLayout>
                        <Success />
                    // <ProtectedLayout>
                }
            ]
        },
        {
            path: '/dashboard',
            element:
                // <ProtectedLayout>
                <Dashboard />,
            // <ProtectedLayout>,
            children: [
                {
                    path: "/dashboard",
                    element: <WelcomeDashboard />
                },
                {
                    path: "/dashboard/:tipo",
                    element: <DinamicList />
                },
                {
                    path: "/dashboard/add_funcionario",
                    element: <EmployeesForm />
                },
                {
                    path: "/dashboard/edit_funcionario/:tipo/:id",

                    element:
                        //  <ProtectedLayout>
                        <DashboardEdit />
                    // </ProtectedLayout>
                },
                {
                    path: "/dashboard/update_funcionario/:tipo/:id",
                    element:
                        // <ProtectedLayout>
                        <DashboardFormUpdate />
                    // </ProtectedLayout>
                },
            ]
        }

    ]);



    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Routers;
