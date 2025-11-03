import { palette } from "@/constant/colors";

const statsData = (formData) => {
  return [
    {
      title: "Total de usuarios",
      value: formData.user_value_total,
      change: `${formData.rate?.employees || 0}%`,
      iconName: "FiCalendar",
      type: "today",
    },
    {
      title: "Consultas Realizadas",
      value: formData.records_value_total,
      change: `${formData.rate?.records || 0}%`,
      iconName: "FiCheck",
      type: "completed",
      color: palette.patient_color.moderate_details,
    },
    {
      title: "Triagens Pendentes",
      value: formData.triage_pending_total,
      change: `${formData.triage_pending_total} pendentes`,
      iconName: "FiClock",
      type: "pending",
      color: palette[300],
    },
    {
      title: "Leitos Ocupados",
      value: formData.beds_occupied_total,
      change: `${formData.rate?.beds_occupied || 0}%`,
      iconName: "FiX",
      color: palette.patient_color.critical_details,
      type: "cancelled",
    },
  ];
};

const professionalsData = (formData) => {
  console.log("professionalsData - formData received:", formData);
  const professionals = formData?.all_employee || [];
  console.log("professionalsData - professionals array:", professionals);

  if (!Array.isArray(professionals)) {
    console.error("all_employee is not an array:", professionals);
    return [];
  }

  return professionals
    .map((employee, index) => {
      console.log(`Processing employee ${index}:`, employee);

      if (!employee || !employee.user) {
        console.error(
          `Employee ${index} or employee.user is missing:`,
          employee
        );
        return null;
      }

      const user = employee.user;
      let roleLabel = "";

      switch (user.role) {
        case "doctor":
          roleLabel = `Dr. - ${
            employee.specialty || "Especialidade não informada"
          }`;
          break;
        case "nurse":
          roleLabel = `Enfermeiro(a) - ${employee.specialty || "Geral"}`;
          break;
        case "attendant":
          roleLabel = "Atendente";
          break;
        case "admin":
          roleLabel = "Administrador";
          break;
        default:
          roleLabel = "Função não definida";
      }

      const result = {
        name: user.name || "Nome não informado",
        role: roleLabel,
        phone: user.phone || "Telefone não informado",
        email: user.email || "Email não informado",
        status: employee.active ? "Ativo" : "Inativo",
        avatar: user.photo || null,
      };

      console.log(`Processed employee ${index}:`, result);
      return result;
    })
    .filter(Boolean); // Remove null values
};

const teamStatsData = (formData) => {
  const employeeCounts = formData.employee_counts || {};

  return [
    { role: "Médicos", count: employeeCounts.doctors || 0 },
    { role: "Enfermeiros", count: employeeCounts.nurses || 0 },
    { role: "Atendentes", count: employeeCounts.attendants || 0 },
  ];
};

export { statsData, professionalsData, teamStatsData };
