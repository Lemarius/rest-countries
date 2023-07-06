import {
	StyledContainer,
	StyledDarkCont,
	StyledDarkImg,
	StyledH1,
	StyledH2,
	StyledNav
} from './styles';

const Header = ({ darkMode, setDarkMode }) => {
	return (
		<>
			<StyledContainer darkMode={darkMode}>
				<StyledNav>
					<StyledH1 darkMode={darkMode}>Where in the world?</StyledH1>
					<StyledDarkCont onClick={() => toggleDarkMode(darkMode, setDarkMode)}>
						<StyledDarkImg
							src={
								darkMode ? './images/icon-sun.png' : './images/icon-moon.png'
							}
						/>
						<StyledH2 darkMode={darkMode}>
							{darkMode ? 'Light mode' : 'Dark mode'}
						</StyledH2>
					</StyledDarkCont>
				</StyledNav>
			</StyledContainer>
		</>
	);
};

const toggleDarkMode = (darkMode, setDarkMode) => {
	setDarkMode(!darkMode);
};

export default Header;
