import styled from 'styled-components';

export const HeaderDashboardStyle = styled.div`
display: flex;
justify-content: center;
color: ${({ theme }) => theme.color.primary};
`

export const ContainerDashboard = styled.td`
    display: flex;
    justify-content:space-evenly; 
    align-items: center;
    height: inherit;
    border-bottom: 1px solid #ddd; 
    padding: 5px;
    cursor: pointer;

        .btnDash{
            height: 30px;
            width: 30px;
            color: black;
        }
        
        .btn_edit{
            &:hover{
                color: ${({theme})=>theme.btnColor.info};
            }
        }

        .btn_delete{
            &:hover{
                color: ${({theme})=>theme.btnColor.danger};
            }
        }
` 