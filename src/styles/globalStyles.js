import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    body {
	    font-family: sans-serif;
        background-color: ${props => !props.darkMode ? '#F5F5F5' : '#202C36'};
        transition: 0.3s all ease;
    }

`;

export {GlobalStyles};