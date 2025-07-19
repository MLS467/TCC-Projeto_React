const BackButton = styled(Link)`
  display: block;
  margin: 36px auto 0 auto;
  background: ${palette[600]};
  color: #fff;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 1.08rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgba(60, 60, 120, 0.1);
  transition: background 0.18s, transform 0.15s;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${palette[700]};
    transform: translateY(-2px) scale(1.03);
  }
`;
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { palette } from "@/constant/colors";
import { FaFileMedical } from "react-icons/fa";

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  padding: 32px 0;
`;

const RecordCard = styled(Link)`
  background: linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%);
  border-radius: 16px;
  padding: 28px 24px 20px 24px;
  box-shadow: 0 4px 16px 0 rgba(60, 60, 120, 0.08);
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.2s, transform 0.18s;
  outline: none;

  &:hover,
  &:focus {
    box-shadow: 0 8px 32px 0 rgba(60, 60, 120, 0.16);
    transform: translateY(-4px) scale(1.02);
    background: linear-gradient(135deg, #f1f5fa 60%, #dbeafe 100%);
  }
`;

const RecordHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const RecordId = styled.span`
  color: ${palette[700]};
  background: #e0e7ef;
  border-radius: 6px;
  font-size: 1.05rem;
  font-family: "Fira Mono", monospace;
  padding: 2px 10px;
  letter-spacing: 1px;
`;

const RecordDate = styled.span`
  color: ${palette[500]};
  font-size: 0.98rem;
  margin-left: auto;
`;

const PatientName = styled.p`
  color: ${palette[800]};
  margin: 8px 0 0 0;
  font-weight: 600;
  font-size: 1.13rem;
  letter-spacing: 0.2px;
`;

const IconCircle = styled.div`
  background: ${palette[600]};
  color: #fff;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 8px 0 rgba(60, 60, 120, 0.1);
`;

const HeaderSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${palette[800]};
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: ${palette[600]};
  margin: 0;
`;

export const MedicalRecordCardList = ({ records, title, subtitle }) => {
  const [searchParams] = useSearchParams();
  const id_patient = searchParams.get("id_patient");
  // Função para formatar o id (6 caracteres, com zeros à esquerda se necessário)
  const formatId = (id) => {
    if (!id) return "";
    return String(id).padStart(6, "0").slice(-6);
  };

  // Função para data bonitinha
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div>
      <HeaderSection>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </HeaderSection>

      <CardListContainer>
        {records.map((record) => (
          <RecordCard
            key={record.id}
            to={`/medical-record/show/${record.id}`}
            tabIndex={0}
            aria-label={`Ver prontuário de ${record.full_name || record.name}`}
          >
            <RecordHeader>
              <IconCircle>
                <FaFileMedical />
              </IconCircle>
              <RecordId>#{formatId(record.id)}</RecordId>
              <RecordDate>
                {formatDate(record.created_at || record.date)}
              </RecordDate>
            </RecordHeader>
            <PatientName>{record.full_name || record.name}</PatientName>
          </RecordCard>
        ))}
      </CardListContainer>
      <BackButton to={`/consultation-form/${btoa(id_patient || "")}`}>
        Voltar para Consulta
      </BackButton>
    </div>
  );
};
