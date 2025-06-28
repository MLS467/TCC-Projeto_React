import FeatureItem from "./FeatureItem";

const features = [
  {
    icon: "desktop_windows",
    iconColor: "#2563eb",
    bgColor: "#e3edfe",
    title: "Interface Intuitiva",
    desc: "Dashboard moderno e fácil de usar para todos os profissionais.",
  },
  {
    icon: "storage",
    iconColor: "#16a34a",
    bgColor: "#d1fadf",
    title: "Gestão Completa",
    desc: "Gerencie pacientes, consultas, exames e relatórios em um só lugar.",
  },
  {
    icon: "cloud",
    iconColor: "#a21caf",
    bgColor: "#f3e8ff",
    title: "Acesso em Nuvem",
    desc: "Acesse seus dados de qualquer lugar, a qualquer momento.",
  },
  {
    icon: "lock",
    iconColor: "#dc2626",
    bgColor: "#fee2e2",
    title: "Máxima Segurança",
    desc: "Criptografia avançada e conformidade com LGPD.",
  },
];

const FeatureList = () => (
  <div>
    {features.map((f, i) => (
      <FeatureItem key={i} {...f} />
    ))}
  </div>
);

export default FeatureList;
