import styled from "styled-components";

export const DashboardEditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CardContainer = styled.div`
  background-color: #f9f9f9;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: auto;
  max-width: 600px;
  margin: 20px auto;
  a {
    text-decoration: none;
    color: #333;
    width: 10%;
  }
`;

export const Header = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  margin-bottom: 20%;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 12px;

  span {
    font-size: 18px;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #555;
`;

export const Label = styled.span`
  font-weight: 600;
  color: #333;
`;

export const Value = styled.span`
  color: #777;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 20px;
  align-self: center;
`;

export const Badge = styled.span`
  display: inline-block;
  background-color: ${(props) => (props.active ? "#4CAF50" : "#FF5722")};
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 18px;
  margin-top: 10px;
  align-self: center;
`;

export const ContainerBtnEdit = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 10px 60px;
  /* border: 1px solid red; */
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
`;

export const ButtonWrapper = styled.div`
  width: 30%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 10px;
  width: 100px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.color.primary};
  color: white;
  font-size: 18px;
`;
