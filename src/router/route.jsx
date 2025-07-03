import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../screens/Login";
import Home from "../screens/Home";
import PatientListScreen from "../screens/Lists/MedicalPatientList";
import InitialForm from "../screens/Forms/initialForm";
import TriageForm from "../screens/Forms/triageForm";
import ConsultationForm from "../screens/Forms/consultationForm";
import NursePatientListScreen from "../screens/Lists/NursePatientList";
import SuccessPage from "../screens/Success";
import ProtectedLayout from "../components/common/Protected/ProtectedLayout";
import { Dashboard } from "../screens/Dashboard";
import HomeDashboard from "../screens/Dashboard/home/Home";
import AtendentePage from "../screens/Dashboard/attendant";
import MedicoPage from "../screens/Dashboard/doctor";
import EnfermeiroPage from "../screens/Dashboard/nurse";
import DocumentScreen from "../screens/document";
import { FormTriageProvider } from "../Context/FormsContext/FormTriageContext/exports";
import { FormConsultationProvider } from "../Context/FormsContext/FormConsultationContext/exports";
import { FormInitialProvider } from "../Context/FormsContext/FormInitialContext";

const Route = () => {
  const routers = createBrowserRouter([
    {
      element: <App />,
      path: "/",
    },
    {
      element: <Home />,
      path: "/home",
    },
    {
      element: <Login />,
      path: "/login",
    },
    {
      element: (
        <ProtectedLayout>
          <PatientListScreen />
        </ProtectedLayout>
      ),

      path: "/list-patients",
    },
    {
      element: (
        <ProtectedLayout>
          <FormInitialProvider>
            <InitialForm />
          </FormInitialProvider>
        </ProtectedLayout>
      ),
      path: "/initial-form",
    },
    {
      element: (
        <ProtectedLayout>
          <FormTriageProvider>
            <TriageForm />
          </FormTriageProvider>
        </ProtectedLayout>
      ),
      path: "/triage-form/:id",
    },
    {
      element: (
        <ProtectedLayout>
          <FormConsultationProvider>
            <ConsultationForm />
          </FormConsultationProvider>
        </ProtectedLayout>
      ),
      path: "/consultation-form/:id",
    },
    {
      element: (
        <ProtectedLayout>
          <NursePatientListScreen />
        </ProtectedLayout>
      ),
      path: "/nurse-patient-list",
    },
    {
      element: (
        <ProtectedLayout>
          <SuccessPage />
        </ProtectedLayout>
      ),
      path: "/success",
    },
    {
      element: <DocumentScreen />,
      path: "/document-data",
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedLayout>
          <Dashboard />
        </ProtectedLayout>
      ),
      children: [
        {
          index: true,
          element: <HomeDashboard />,
        },
        {
          path: "consultas",
          element: <div>Consultas - Em desenvolvimento</div>,
        },
        {
          path: "relatorios",
          element: <div>Relatórios - Em desenvolvimento</div>,
        },
        {
          path: "atendente",
          element: <AtendentePage />,
        },
        {
          path: "medico",
          element: <MedicoPage />,
        },
        {
          path: "enfermeira",
          element: <EnfermeiroPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default Route;
