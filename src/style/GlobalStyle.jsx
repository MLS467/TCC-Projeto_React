import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root{
    --primary-color: #379BD2;  
    --secondary-color: #3fa3da; 
    --borda: 1px solid #f00;
}

*{
    margin: 0;
    padding: 0;
    font-family: "Roboto Flex", serif;
    outline: none;
    box-sizing: border-box;
}

html,:root,body{
    width: 100%;
    height: 100%;
}


`