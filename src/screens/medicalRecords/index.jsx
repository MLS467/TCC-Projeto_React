import { useParams } from "react-router-dom";
import { MedicalRecordCardList } from "../../components/MedicalRecords";
import {
  PageContainer,
  ErrorContainer,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateButton,
  HeaderSection,
  PageTitle,
  PageSubtitle,
} from "./style";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
import SpinnerScreen from "@/components/common/spinnerScreen";
import { useEffect, useState } from "react";
import { FiFileText, FiArrowLeft, FiSearch } from "react-icons/fi";

const MedicalRecordsScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cpf } = useParams();
  const { ReadAll } = useCrud();

  // Função para formatar CPF para exibição
  const formatCPF = (cpf) => {
    if (!cpf) return "";
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!cpf) {
        setError("CPF não fornecido");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const result = await ReadAll({
          endpoint: "medical-record/search",
          params: cpf,
        });

        if (!result || !result.data) {
          throw new Error("Nenhum prontuário encontrado para este paciente.");
        }

        // Garantir que sempre temos um array
        const records = Array.isArray(result.data.data)
          ? result.data.data
          : Array.isArray(result.data)
          ? result.data
          : [result.data];

        setData(records);
      } catch (error) {
        toast.error("Erro ao buscar prontuários!");
        console.error("Erro ao buscar prontuários:", error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cpf, ReadAll]);

  if (isLoading) {
    return <SpinnerScreen message="Carregando prontuários..." />;
  }

  if (error) {
    return (
      <PageContainer>
        <HeaderSection>
          <PageTitle>Prontuários Médicos</PageTitle>
          <PageSubtitle>
            Histórico médico para o paciente CPF: {formatCPF(cpf)}
          </PageSubtitle>
        </HeaderSection>

        <ErrorContainer>
          <EmptyStateIcon>
            <FiSearch />
          </EmptyStateIcon>
          <h2>Erro ao carregar prontuários</h2>
          <p>{error}</p>
          <EmptyStateButton onClick={() => window.location.reload()}>
            Tentar novamente
          </EmptyStateButton>
        </ErrorContainer>
      </PageContainer>
    );
  }

  if (!data || data.length === 0) {
    return (
      <PageContainer>
        <HeaderSection>
          <PageTitle>Prontuários Médicos</PageTitle>
          <PageSubtitle>
            Histórico médico para o paciente CPF: {formatCPF(cpf)}
          </PageSubtitle>
        </HeaderSection>

        <EmptyStateContainer>
          <EmptyStateIcon>
            <FiFileText />
          </EmptyStateIcon>
          <EmptyStateTitle>Nenhum prontuário encontrado</EmptyStateTitle>
          <EmptyStateDescription>
            Este paciente ainda não possui registros médicos em nosso sistema.
            Os prontuários aparecerão aqui após as primeiras consultas e
            procedimentos.
          </EmptyStateDescription>
          <EmptyStateButton onClick={() => window.history.back()}>
            <FiArrowLeft />
            Voltar
          </EmptyStateButton>
        </EmptyStateContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeaderSection>
        <PageTitle>Prontuários Médicos</PageTitle>
        <PageSubtitle>
          Histórico médico para o paciente CPF: {formatCPF(cpf)}
        </PageSubtitle>
      </HeaderSection>

      <MedicalRecordCardList
        records={data}
        title="Registros Encontrados"
        subtitle={`${data.length} ${
          data.length === 1
            ? "prontuário encontrado"
            : "prontuários encontrados"
        }`}
      />
    </PageContainer>
  );
};

export default MedicalRecordsScreen;
