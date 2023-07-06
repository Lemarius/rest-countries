import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 80%;
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: auto;
    gap: 50px;
`;

const StyledCardCont = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: auto;
    gap: 50px;
`;

const StyledCard = styled.div`
    width: 300px;
    height: 336px;
    background-color: ${props => !props.darkMode ? 'white' : '#2B3844'};
    border-radius: 10px;
    overflow: hidden;
`;

const StyledCardImg = styled.img`
    width: 300px;
    height: 150px;
    object-fit: cover;
`;

const StyledH1 = styled.h1`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: ${props => !props.darkMode ? 'black' : 'white'};
    margin-bottom: 5px;
`;

const StyledInfoCont = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
    margin-left: 20px;
    position: relative;
    top: 20px;
`;

const StyledH2 = styled.h2`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${props => !props.darkMode ? 'black' : 'white'};
`;

const StyledSpan = styled.span`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: ${props => !props.darkMode ? 'black' : 'white'};
`;

const StyledFilterCont = styled.div`
    width: 89%;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
`;

const StyledInput = styled.input`
    width: 480px;
    height: 56px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    background-color: ${props => !props.darkMode ? 'white' : '#2B3844'};
    outline: none;
    border: 0;
    box-shadow: ${props => !props.darkMode ? '0px 5px 5px lightgray' : 'none'};
    color: ${props => !props.darkMode ? 'gray' : 'white'};
    padding-left: 20px;
    transition: 0.3s all ease;

    &::placeholder {
        color: ${props => !props.darkMode ? 'gray' : 'white'};
    }
`;

const StyledSelect = styled.select`
    width: 200px;
    height: 56px;
    background-color: ${props => !props.darkMode ? 'white' : '#2B3844'};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    outline: none;
    border: 0;
    box-shadow: ${props => !props.darkMode ? '0px 5px 5px lightgray' : 'none'};
    padding: 0 20px;
    color: ${props => !props.darkMode ? 'gray' : 'white'};
    transition: 0.3s all ease;
`;

const StyledOption = styled.option`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    
`;

export {StyledContainer, StyledCardCont, StyledCard, StyledCardImg, StyledH1, StyledInfoCont, StyledH2, StyledSpan, StyledFilterCont, StyledInput, StyledSelect, StyledOption}