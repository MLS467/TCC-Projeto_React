import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../screens/Home";
import Login from "../screens/Login";
import PatientListScreen from "../screens/Lists/MedicalPatientList";
import InitialForm from "../screens/Forms/initialForm";
import TriageForm from "../screens/Forms/triageForm";
import ConsultationForm from "../screens/Forms/consultationForm";
import NursePatientListScreen from "../screens/Lists/NursePatientList";
import ProtectedLayout from "../components/common/Protected/ProtectedLayout";

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
          <InitialForm />
        </ProtectedLayout>
      ),
      path: "/initial-form",
    },
    {
      element: (
        <ProtectedLayout>
          <TriageForm />
        </ProtectedLayout>
      ),
      path: "/triage-form/:id",
    },
    {
      element: (
        <ProtectedLayout>
          <ConsultationForm />
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
  ]);

  return <RouterProvider router={routers} />;
};

export default Route;
