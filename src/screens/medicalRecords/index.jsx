import { useParams } from "react-router-dom";
import { MedicalRecordCardList } from "../../components/MedicalRecords";
import { PageContainer, ErrorContainer, EmptyStateContainer } from "./style";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
import SpinnerScreen from "@/components/common/spinnerScreen";
import { useEffect, useState } from "react";

const MedicalRecordsScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cpf } = useParams();
  const { ReadAll } = useCrud();

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
        <ErrorContainer>
          <h2>Erro ao carregar prontuários</h2>
          <p>{error}</p>
        </ErrorContainer>
      </PageContainer>
    );
  }

  if (!data || data.length === 0) {
    return (
      <PageContainer>
        <EmptyStateContainer>
          <h2>Nenhum prontuário encontrado</h2>
          <p>Não foram encontrados prontuários para este paciente.</p>
        </EmptyStateContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <MedicalRecordCardList
        records={data}
        title="Prontuários Médicos"
        subtitle="Visualize e gerencie os prontuários dos pacientes"
      />
    </PageContainer>
  );
};

export default MedicalRecordsScreen;
