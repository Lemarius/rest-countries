import { useEffect, useState } from 'react';
import {
	StyledCard,
	StyledCardCont,
	StyledCardImg,
	StyledContainer,
	StyledFilterCont,
	StyledH1,
	StyledH2,
	StyledInfoCont,
	StyledInput,
	StyledOption,
	StyledSelect,
	StyledSpan
} from './styles';

const MainPage = ({ darkMode }) => {
	const [countries, setCountries] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedRegion, setSelectedRegion] = useState('');

	useEffect(() => {
		fetchCountries(selectedRegion, setCountries);
	}, [selectedRegion]);

	const filteredCountries = filterByName(searchTerm, countries);

	return (
		<>
			<StyledContainer>
				<StyledFilterCont>
					<StyledInput
						darkMode={darkMode}
						placeholder='Search for a country...'
						value={searchTerm}
						onChange={e => handleSearchChange(e, setSearchTerm)}
					/>
					<StyledSelect
						darkMode={darkMode}
						value={selectedRegion}
						onChange={e => handleRegionChange(e, setSelectedRegion)}
					>
						<StyledOption value=''>Filter by Region</StyledOption>
						<StyledOption>Africa</StyledOption>
						<StyledOption>America</StyledOption>
						<StyledOption>Asia</StyledOption>
						<StyledOption>Europe</StyledOption>
						<StyledOption>Oceania</StyledOption>
					</StyledSelect>
				</StyledFilterCont>
				<StyledCardCont>
					{filteredCountries.map(country => (
						<StyledCard darkMode={darkMode} key={country.name.common}>
							<StyledCardImg src={country.flags.png} />
							<StyledInfoCont>
								<StyledH1 darkMode={darkMode}>{country.name.common}</StyledH1>
								<StyledH2 darkMode={darkMode}>
									<StyledSpan darkMode={darkMode}>Population:</StyledSpan>{' '}
									{country.population}
								</StyledH2>
								<StyledH2 darkMode={darkMode}>
									<StyledSpan darkMode={darkMode}>Region:</StyledSpan>{' '}
									{country.region}
								</StyledH2>
								<StyledH2 darkMode={darkMode}>
									<StyledSpan darkMode={darkMode}>Capital:</StyledSpan>{' '}
									{country.capital}
								</StyledH2>
							</StyledInfoCont>
						</StyledCard>
					))}
				</StyledCardCont>
			</StyledContainer>
		</>
	);
};

const fetchCountries = async (selectedRegion, setCountries) => {
	const url = selectedRegion
		? `https://restcountries.com/v3.1/region/${selectedRegion}`
		: 'https://restcountries.com/v3.1/all';
	const response = await fetch(url);
	const data = await response.json();
	setCountries(data);
}; // Si la región seleccionada (selectedRegion) existe, se usa una url u otra dependiendo de lo que se quiera hacer.

const filterByName = (searchTerm, countries) => {
	return countries.filter(country =>
		country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
	);
};

const handleSearchChange = (e, setSearchTerm) => {
	const searchTerm = e.target.value;
	setSearchTerm(searchTerm);
};

const handleRegionChange = (e, setSelectedRegion) => {
	const selectedRegion = e.target.value;
	setSelectedRegion(selectedRegion);
};

export default MainPage;
