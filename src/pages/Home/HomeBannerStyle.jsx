import styled from 'styled-components';
// div pai do banner 
export const HomeContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
height: 500px ;
width: 100%;
max-height: 500px !important;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

// div do banner 
export const HomeBannerStyle = styled.div`
display: flex;
background-color: var(--primary-color);
width: 100%;
height: 100%;
flex-direction:row;
align-items: center;
justify-content: space-evenly;

`;

// div do texto do banner
export const HomeTextStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 40%;
height: 60%;
align-items: center;


div{ 
      h1{
      font-size: 40px;
      color: white;
      text-align: center;
      &::first-letter{
         font-size: 45px;
      }
   }

   p{
   font-size: 25px;
   color: white;
   text-align: center;
   font-style: italic;
      &::first-letter{
         font-size: 30px;
      }
   }
}

button{
   margin-top: 30px;

}

// shadow aqui
`;

// div da imagem do banner
export const HomeImageStyle = styled.div`
display: flex;
width: 25%;
height: 100%;
align-items: center;
justify-content: center;

 img{
    width: 100%;
    height: 100%;
 }
`;

