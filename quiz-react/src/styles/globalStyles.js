import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
padding: 0;
margin: 0;
font-family: "Raleway", sans-serif;
color: #fff;
}

body,
html {
    min-height: 100vh;
    height: 100%;
    background-color: #1c1c1c;
}

img{
    max-width: 100%;
}


text-align: center;
padding-top: 3rem;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;

`;

export default GlobalStyle;
