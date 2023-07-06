import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';
import Router from './router/Router';
import { useState } from 'react';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<>
			<BrowserRouter>
				<GlobalStyles darkMode={darkMode} />
				<Router darkMode={darkMode} setDarkMode={setDarkMode} />
			</BrowserRouter>
		</>
	);
};

export default App;
