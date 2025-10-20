import { useState, useEffect } from "react";
import {
  BedsContainer,
  BedsHeader,
  BedsGrid,
  BedCard,
  BedNumber,
  BedStatus,
  BedInfo,
  StatusIndicator,
  LoadingWrapper,
  EmptyState,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
  FilterContainer,
  FilterButton,
} from "./style";
import CommonHeaderForm from "@/components/common/CommonHeaderForm";
import { FaBed, FaBedPulse } from "react-icons/fa6";
import { FiUser, FiClock } from "react-icons/fi";
import useRequest from "@/Hook/useRequest";

const BedManagement = () => {
  const { api } = useRequest();
  const [beds, setBeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all"); // 'all', 'occupied', 'available'

  useEffect(() => {
    fetchBeds();
  }, []);

  async function fetchBeds() {
    try {
      setLoading(true);
      const { data } = await api(import.meta.env.VITE_API_BEG);

      if (!data) {
        throw new Error("Erro ao carregar dados dos leitos");
      }

      console.log(data.data);

      const mappedBeds = data.data.map((bed) => ({
        id: bed.id,
        number: bed.number_bed,
        status: bed.status_bed ? "occupied" : "available",
        patient: bed.user
          ? {
              name: bed.user.name || "Paciente",
              admissionDate: bed.updated_at,
            }
          : null,
        created_at: bed.created_at,
        updated_at: bed.updated_at,
      }));

      setBeds(mappedBeds);
    } catch (err) {
      console.error("Erro ao buscar leitos:", err);
      setError(err.message);
      setBeds([]);
    } finally {
      setLoading(false);
    }
  }

  const filteredBeds = beds.filter((bed) => {
    if (filter === "occupied") return bed.status === "occupied";
    if (filter === "available") return bed.status === "available";
    return true;
  });

  const stats = {
    total: beds.length,
    occupied: beds.filter((bed) => bed.status === "occupied").length,
    available: beds.filter((bed) => bed.status === "available").length,
  };

  const occupancyRate =
    stats.total > 0 ? Math.round((stats.occupied / stats.total) * 100) : 0;

  if (loading) {
    return (
      <BedsContainer>
        <CommonHeaderForm
          title="Gerenciamento de Leitos"
          description="Visualize e gerencie a ocupação dos leitos hospitalares"
        />
        <LoadingWrapper>
          <FaBedPulse size={48} />
          <p>Carregando informações dos leitos...</p>
        </LoadingWrapper>
      </BedsContainer>
    );
  }

  if (error && beds.length === 0) {
    return (
      <BedsContainer>
        <CommonHeaderForm
          title="Gerenciamento de Leitos"
          description="Visualize e gerencie a ocupação dos leitos hospitalares"
        />
        <EmptyState>
          <FaBed size={48} />
          <h3>Erro ao carregar dados</h3>
          <p>{error}</p>
          <button onClick={fetchBeds}>Tentar novamente</button>
        </EmptyState>
      </BedsContainer>
    );
  }

  return (
    <BedsContainer>
      <CommonHeaderForm
        title="Gerenciamento de Leitos"
        description="Visualize e gerencie a ocupação dos leitos hospitalares"
      />

      <StatsContainer>
        <StatCard>
          <StatNumber>{stats.total}</StatNumber>
          <StatLabel>Total de Leitos</StatLabel>
        </StatCard>
        <StatCard status="occupied">
          <StatNumber>{stats.occupied}</StatNumber>
          <StatLabel>Leitos Ocupados</StatLabel>
        </StatCard>
        <StatCard status="available">
          <StatNumber>{stats.available}</StatNumber>
          <StatLabel>Leitos Disponíveis</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{occupancyRate}%</StatNumber>
          <StatLabel>Taxa de Ocupação</StatLabel>
        </StatCard>
      </StatsContainer>

      <BedsHeader>
        <h2>Status dos Leitos</h2>
        <FilterContainer>
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            Todos
          </FilterButton>
          <FilterButton
            active={filter === "occupied"}
            onClick={() => setFilter("occupied")}
          >
            Ocupados
          </FilterButton>
          <FilterButton
            active={filter === "available"}
            onClick={() => setFilter("available")}
          >
            Disponíveis
          </FilterButton>
        </FilterContainer>
      </BedsHeader>

      {filteredBeds.length === 0 ? (
        <EmptyState>
          <FaBed size={48} />
          <h3>Nenhum leito encontrado</h3>
          <p>Não há leitos que correspondam ao filtro selecionado.</p>
        </EmptyState>
      ) : (
        <BedsGrid>
          {filteredBeds.map((bed) => (
            <BedCard key={bed.id} status={bed.status}>
              <StatusIndicator status={bed.status} />
              <BedNumber>
                <FaBed size={24} />
                Leito {bed.number}
              </BedNumber>
              <BedStatus status={bed.status}>
                {bed.status === "occupied" ? "Ocupado" : "Disponível"}
              </BedStatus>
              {bed.patient && (
                <BedInfo>
                  <div>
                    <FiUser size={16} />
                    <span>{bed.patient.name}</span>
                  </div>
                  <div>
                    <FiClock size={16} />
                    <span>
                      Desde{" "}
                      {new Date(bed.patient.admissionDate).toLocaleString(
                        "pt-BR",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </span>
                  </div>
                </BedInfo>
              )}
            </BedCard>
          ))}
        </BedsGrid>
      )}
    </BedsContainer>
  );
};

export default BedManagement;
