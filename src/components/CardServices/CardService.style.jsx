import styled from 'styled-components';


export const CardServiceStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
    align-items: center;
    width: 350px;
    height: 300px;
    border-right:${(props) => props.right ? '2px solid #eee' : 'none'}; 
    border-top: ${(props) => props.top ? '2px solid #eee' : 'none'};;
    padding: 10px;
    background-color: #fff;

    div {
        display: inherit;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
       
        img {
            width: 70px;
        }

        h4 {
            text-align: center;
            color: ${(props) => props.theme.color.primary};
            font-size: 20px;
            font-weight: 600;
        }
    }

    p {
        font-size: 17px;
        font-style: italic;
        text-align: center;
    }
    
`