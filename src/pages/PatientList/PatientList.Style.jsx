import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse; /* Remove o espaço entre as bordas */
  margin: 20px 0;
`;

export const TableHead = styled.thead`
  background-color: var(--primary-color);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9; /* Listrado alternado */
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border-bottom: 2px solid #ccc; /* Borda inferior nas células de cabeçalho */
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: ${props => props.color || '#000'};
  border-bottom: 1px solid #ddd; /* Borda inferior nas células de dados */
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
`;
