import { IoIosAddCircleOutline } from 'react-icons/io';
import styled from 'styled-components';

export const DashboardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  overflow-y: hidden !important;
  background-color: ${(props) => props.theme.color.tertiary};
`;

export const SidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 15%;
  height: 100%;
  background-color: ${(props) => props.theme.color.secondary};
  color: #fff;
`;

export const TitleContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.color.primary};
  color: #fff;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: inherit;

    img {
      width: 100px;
    }
    
  
  }
`;

export const ContainerLinkStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;

  a {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #fff;
      color: ${(props) => props.theme.color.primary};
    }
  }
`;

export const DashboarContentStyle = styled.div`
  position: absolute;
  overflow-y: auto;
  top: 100px;
  right: 0;
  width: 85%;
  height: calc(100% - 100px);
`;

export const IoIosAddCircleOutlineStyle = styled(IoIosAddCircleOutline)`
width: 50px;
height: 50px;
position: absolute;
border-radius: 100%;
right: 0;
top: 0;
margin: 10px;
cursor: pointer;
color: ${(props) => props.theme.color.primary};
/* border: 1px solid red; */
  &:hover {
    background-color: #5ce4d4;
    color: white;
  }
`;

