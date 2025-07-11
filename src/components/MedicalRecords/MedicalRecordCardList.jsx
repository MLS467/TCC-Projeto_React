import { Link } from "react-router-dom";
import styled from "styled-components";
import { palette } from "@/constant/colors";

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const RecordCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-left: 4px solid ${palette[600]};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

const RecordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const RecordId = styled.h3`
  color: ${palette[800]};
  margin: 0;
  font-size: 1.2rem;
`;

const RecordDate = styled.span`
  color: ${palette[600]};
  font-size: 0.9rem;
`;

const PatientName = styled.p`
  color: ${palette[700]};
  margin: 10px 0;
  font-weight: 500;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  background: ${palette[600]};
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${palette[700]};
  }
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
  return (
    <div>
      <HeaderSection>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </HeaderSection>

      <CardListContainer>
        {records.map((record) => (
          <RecordCard key={record.id}>
            <RecordHeader>
              <RecordId>#{record.id}</RecordId>
              <RecordDate>
                {new Date(record.created_at || record.date).toLocaleDateString(
                  "pt-BR"
                )}
              </RecordDate>
            </RecordHeader>
            <PatientName>{record.full_name || record.name}</PatientName>
            <ViewButton to={`/medical-record/document/${record.id}`}>
              Ver Prontuário
            </ViewButton>
          </RecordCard>
        ))}
      </CardListContainer>
    </div>
  );
};
