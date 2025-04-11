import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.color.primary};
`;

export const TableRow = styled.tr`
  margin-top: 20px;
  &:nth-child(even) {
    background-color: #fff;
  }
`;

export const TableBody = styled.tbody``;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border-bottom: 2px solid #ccc;
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.color || "#000"};
  border-bottom: 1px solid #ddd;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;

  h1 {
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 20px;
  }
`;
