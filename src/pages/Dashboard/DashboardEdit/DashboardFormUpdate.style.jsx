import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const Badge = styled.div`
  text-align: center;
  background-color: ${({ active }) => (active ? '#4CAF50' : '#FF6347')};
  color: #fff;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Rótulo (label)
export const Label = styled.label`
  font-size: 16px;
  color: #555;
  flex: 1;
`;

export const Input = styled.input`
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #007BFF;
  }
`;

export const Button = styled.button`
  background-color: #007BFF;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const Select = styled.select`
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #007BFF;
  }

`
