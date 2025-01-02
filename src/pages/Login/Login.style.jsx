import styled from 'styled-components';


export const LoginContainer = styled.div` 
/* border: 2px solid red; */
display: flex;
padding: 0 20px;
justify-content: space-between;
align-items: center;
width: 100%;
height:600px;
max-height: 600px;
`;

export const LoginBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-top: 5%;
    height: 100%;
    width: 30%;
    border-radius: 50px;
    /* border: 2px solid ${({ theme }) => theme.color.primary}; */
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 100%;

            div{
                width: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around; 
            }
        }

`