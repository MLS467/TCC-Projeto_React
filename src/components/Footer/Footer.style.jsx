import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction:row ;
    margin-top: 50px;
    justify-content: space-around;
    height:200px;
    background-color: #fff;
    text-align: center;
    width: 100%;
    border-top: 1px solid #e0e0e0; 

    .links{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 70%;
        padding: 20px;
        height: inherit;
        gap: 10px;
        color:${props => props.theme.color.primary};
ul{
    li{
        margin: 3px;
        a{
        text-decoration: none;
            color:${props => props.theme.color.primary};
            font-size: 18px;

            &:hover{
                border-bottom: 1px solid ${props => props.theme.color.primary};
            }
        }
    }
}
}

    .logo{
        display: flex;
        width: 25%;
        height: inherit;
        justify-content: space-around;
        align-items: flex-start;
        align-items: center;

        h2{
            display: flex;
            align-items: center;
            justify-content: center;
            color:${props => props.theme.color.primary};
            img{
                width: 50px;
            }
        }
    }
    
 
        
        .social{
            color:${props => props.theme.color.primary};
                display:flex ;
                justify-content: space-between;
                flex-direction: column;
                width: 10%;
                height: 100%;
                display: flex;
                justify-content: center;
                gap: 10px;
                font-size: 20px;

                div{
                    display: flex;
                    justify-content: space-around;
                    svg{
                        font-size: 50px;
                        color: ${props => props.theme.color.primary};
                        cursor: pointer;
                    }
                }
            }
        
  

`