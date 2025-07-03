import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCrud from "../../../Hook/useCrud";
import { toast } from "sonner";
import { FormConsultationContext } from "./context";

export const FormConsultationProvider = ({ children }) => {
  const { id } = useParams();
  const { Insert } = useCrud();
  const navigate = useNavigate();

  const now = new Date();
  const formatted = now.toISOString().slice(0, 16);

  const [formConsultation, setFormConsultation] = useState({
    patient_id: atob(id),
    reason_for_consultation: "",
    symptoms: "",
    date_time: formatted,
    prescribed_medication: "",
    medical_recommendations: "",
    doctor_observations: "",
  });

  const SendFormForConsultation = async () => {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/consultation`;

    const result = await Insert({
      endpoint,
      data: formConsultation,
    });

    if (result.success) {
      toast.success("Formulário enviado com sucesso!");
      navigate("/success");
    } else {
      toast.error(
        result.error || "Erro ao enviar formulário, tente novamente!"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SendFormForConsultation();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormConsultation({
      ...formConsultation,
      [name]: value,
    });
  };

  const clearForm = () => {
    const now = new Date();
    const formatted = now.toISOString().slice(0, 16);

    setFormConsultation({
      patient_id: atob(id),
      reason_for_consultation: "",
      symptoms: "",
      date_time: formatted,
      prescribed_medication: "",
      medical_recommendations: "",
      doctor_observations: "",
    });
  };

  const contextValue = {
    formConsultation,
    setFormConsultation,
    handleSubmit,
    handleInputChange,
    clearForm,
  };

  return (
    <FormConsultationContext.Provider value={contextValue}>
      {children}
    </FormConsultationContext.Provider>
  );
};
