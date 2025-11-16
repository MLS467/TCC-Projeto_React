import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/screens/Login";
import Home from "@/screens/Home";
import PatientListScreen from "@/screens/Lists/MedicalPatientList";
import InitialForm from "@/screens/Forms/initialForm";
import TriageForm from "@/screens/Forms/triageForm";
import ConsultationForm from "@/screens/Forms/consultationForm";
import NursePatientListScreen from "@/screens/Lists/NursePatientList";
import SuccessPage from "@/screens/success";
import ProtectedLayout from "@/components/common/Protected/ProtectedLayout";
import { Dashboard } from "@/screens/Dashboard";
import HomeDashboard from "@/screens/Dashboard/home/Home";
import AttendantPage from "@/screens/Dashboard/attendant";
import DoctorPage from "@/screens/Dashboard/doctor";
import NursePage from "@/screens/Dashboard/nurse";
import DocumentScreen from "@/screens/document";
import { FormTriageProvider } from "@/Context/FormsContext/FormTriageContext/exports";
import { FormConsultationProvider } from "@/Context/FormsContext/FormConsultationContext/exports";
import { FormInitialProvider } from "@/Context/FormsContext/FormInitialContext";
import { DocumentProvider } from "@/Context/DocumentContext/exports";
import { MedicalTriageDocumentProvider } from "@/Context/DocumentContext/MedicalTriageDocumentProvider";
import { MedicalRecordDocumentProvider } from "@/Context/DocumentContext/MedicalRecordDocumentContext/exports";
import MedicalRecordsScreen from "@/screens/medicalRecords";
import MedicalRecordDocument from "@/screens/medicalRecords/medicalRecordDocument";
import OptionalFormScreen from "@/screens/Forms/initialForm/optionalFormScreen";
import CPFVerificationScreen from "@/screens/Forms/initialForm/cpfVerificationScreen";
import CNSVerificationScreen from "@/screens/Forms/initialForm/cnsVerificationScreen";
import UpdateUserForm from "@/screens/Forms/initialForm/updateUserForm";
import EmployeeUpdate from "@/screens/Dashboard/employeeUpdate";
import AttendantForm from "@/screens/Dashboard/attendant/insert";
import { Navigate } from "react-router-dom";
import MobileWrapper from "@/components/common/MobileWrapper";
import Test from "@/screens/Test";
import DashboardAttendantInsertProvider from "@/Context/DashboardContext/DashboardAttendantContext/insert";
import DashboardDoctorInsertProvider from "@/Context/DashboardContext/DashboardDoctorContext/insert";
import DashboardNurseInsertProvider from "@/Context/DashboardContext/DashboardNurseContext/insert";
import DashboardAdmInsertProvider from "@/Context/DashboardContext/DashboardAdmContext/insert";
import NotFound from "@/screens/404";
import ForgotPassword from "@/screens/ForgotPassword";
import ResetPassword from "@/screens/ForgotPassword/Reset_password";
import BedManagement from "@/screens/Dashboard/Beds";
import DoctorForm from "@/screens/Dashboard/doctor/insert";
import NurseForm from "@/screens/Dashboard/nurse/insert";
import AdmPage from "@/screens/Dashboard/adm";
import AdmForm from "@/screens/Dashboard/adm/insert";
import JoinBedsPage from "@/screens/Dashboard/Beds/JoinBeds/JoinBedsPage";
import ConsultationPage from "@/screens/Dashboard/consultation";

const Route = () => {
  const routers = createBrowserRouter([
    {
      element: <Navigate to="/home" replace />,
      path: "/",
    },
    {
      element: <Test />,
      path: "/test",
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
      element: (
        <ProtectedLayout>
          <DocumentProvider>
            <DocumentScreen />
          </DocumentProvider>
        </ProtectedLayout>
      ),
      path: "/document-data",
    },
    {
      element: (
        <ProtectedLayout>
          <MedicalTriageDocumentProvider>
            <DocumentScreen />
          </MedicalTriageDocumentProvider>
        </ProtectedLayout>
      ),
      path: "/medical-triage-document/:id",
    },
    {
      element: <MedicalRecordsScreen />,
      path: "/medical-record/search/:cpf",
    },
    {
      element: (
        <ProtectedLayout>
          <MedicalRecordDocumentProvider>
            <MedicalRecordDocument />
          </MedicalRecordDocumentProvider>
        </ProtectedLayout>
      ),
      path: "/medical-record/show/:id",
    },
    {
      element: (
        <ProtectedLayout>
          <OptionalFormScreen />
        </ProtectedLayout>
      ),
      path: "/optional-initial-form",
    },
    {
      element: (
        <ProtectedLayout>
          <CPFVerificationScreen />
        </ProtectedLayout>
      ),
      path: "/cpf-verification",
    },
    {
      element: (
        <ProtectedLayout>
          <CNSVerificationScreen />
        </ProtectedLayout>
      ),
      path: "/cns-verification",
    },
    {
      element: (
        <ProtectedLayout>
          <UpdateUserForm />
        </ProtectedLayout>
      ),
      path: "/update-user-form",
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedLayout>
          <DashboardAttendantInsertProvider>
            <Dashboard />
          </DashboardAttendantInsertProvider>
        </ProtectedLayout>
      ),
      children: [
        {
          index: true,
          element: <HomeDashboard />,
        },
        {
          path: "consultas",
          element: <ConsultationPage />,
        },
        {
          path: "bed-management",
          element: <BedManagement />,
        },
        {
          path: "atendente",
          element: <AttendantPage />,
        },
        {
          path: "employee-update",
          element: <EmployeeUpdate />,
        },
        {
          path: "beds-details/:id",
          element: <JoinBedsPage />,
        },
        {
          path: "medico",
          element: <DoctorPage />,
        },
        {
          path: "medico/doctor-form",
          element: (
            <DashboardDoctorInsertProvider>
              <DoctorForm />
            </DashboardDoctorInsertProvider>
          ),
        },
        {
          path: "atendente/attendant-form",
          element: (
            <DashboardAttendantInsertProvider>
              <AttendantForm />
            </DashboardAttendantInsertProvider>
          ),
        },
        {
          path: "enfermeira",
          element: <NursePage />,
        },
        {
          path: "enfermeira/nurse-form",
          element: (
            <DashboardNurseInsertProvider>
              <NurseForm />
            </DashboardNurseInsertProvider>
          ),
        },
        {
          path: "adm",
          element: <AdmPage />,
        },
        {
          path: "adm/adm-form",
          element: (
            <DashboardAdmInsertProvider>
              <AdmForm />
            </DashboardAdmInsertProvider>
          ),
        },
      ],
    },
  ]);

  return (
    <MobileWrapper>
      <RouterProvider router={routers} />
    </MobileWrapper>
  );
};

export default Route;
