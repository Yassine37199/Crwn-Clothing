import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Futura";
        src: url('./Assets/Fonts/FuturaPTMedium.otf') format("opentype"),
        }
    
    /* * {
        outline: 1px solid blue;
    } */
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Futura', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 15px 60px;
        background-color: #e5e5e5;

        @media screen and (max-width : 800px) {
            padding : 10px;
            
        }
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  


`