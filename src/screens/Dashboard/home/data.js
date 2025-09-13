import { palette } from "@/constant/colors";

const statsData = (formData) => {
  return [
    {
      title: "Total de usuarios",
      value: formData.user_value_total,
      change: "+12% vs ontem",
      iconName: "FiCalendar",
      type: "today",
    },
    {
      title: "Consultas Realizadas",
      value: formData.records_value_total,
      change: "+8% vs ontem",
      iconName: "FiCheck",
      type: "completed",
      color: palette.patient_color.moderate_details,
    },
    {
      title: "Triagens Pendentes",
      value: formData.triage_pending_total,
      change: "4 para hoje",
      iconName: "FiClock",
      type: "pending",
      color: palette[300],
    },
    {
      title: "Consultas Pendentes",
      value: formData.consultation_pending_total,
      change: "-50% vs ontem",
      iconName: "FiX",
      color: palette[400],
      type: "cancelled",
    },
  ];
};

const professionalsData = [
  {
    name: "Dr. Ana Silva",
    role: "Médica - Cardiologia",
    phone: "(11) 99999-9999",
    email: "ana.silva@clinic.com",
    status: "Ativo",
    avatar: null,
  },
  {
    name: "Enf. Carlos Santos",
    role: "Enfermeiro",
    phone: "(11) 88888-8888",
    email: "carlos.santos@clinic.com",
    status: "Ativo",
    avatar: null,
  },
  {
    name: "Dr. Maria Costa",
    role: "Médica - Pediatria",
    phone: "(11) 77777-7777",
    email: "maria.costa@clinic.com",
    status: "Ocupado",
    avatar: null,
  },
];

const teamStatsData = [
  { role: "Médicos", count: 12 },
  { role: "Enfermeiros", count: 8 },
  { role: "Atendentes", count: 15 },
];

export { statsData, professionalsData, teamStatsData };
