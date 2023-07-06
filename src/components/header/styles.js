import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    margin: auto;
    border-bottom: 2px solid lightgray;
    padding: 20px 0;
    background-color: ${props => !props.darkMode ? 'white' : '#2B3844'};
    transition: 0.3s all ease;
`;

const StyledNav = styled.nav`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

const StyledH1 = styled.h1`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.darkMode ? 'white' : 'black'};
    transition: 0.3s all ease;
`;

const StyledDarkCont = styled.div`
    display: flex;
    gap: 5px;
    cursor: pointer;
`;

const StyledDarkImg = styled.img`
    width: 25px;
    object-fit: contain;
`;

const StyledH2 = styled.h2`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.darkMode ? 'white' : 'black'};
    transition: 0.3s all ease;
`;

export {StyledContainer, StyledNav, StyledH1, StyledDarkCont, StyledDarkImg, StyledH2};