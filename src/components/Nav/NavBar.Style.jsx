import styled from 'styled-components';


export const NavBarStyle = styled.nav` 
    /* border: 1px solid black; */
    position: fixed !important;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 5%;
    background-color: #fff;
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 100;

        .icons{
            color: ${({ theme }) => theme.color.primary};
            width: 32px;
            height: 32px;
        }
 
`;

export const DivIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 25%;
    `;

export const DivBtnIcons = styled.div`
    display: flex;
    /* border: 1px solid black; */
    width: 25%;
    justify-content: space-between;
    align-items: center;
    flex-direction:  row;
`;

export const LogoContainer = styled.div`
    /* border: 1px solid black; */
   
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    flex-direction: row;

    a{
     text-decoration: none;
    }

    h1{
      text-shadow: 2px 2px 4px rgba(55, 155, 210, 0.8);
        color: ${({ theme }) => theme.color.primary};
        font-size: 2rem;
    }


`;

