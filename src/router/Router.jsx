import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import MainPage from '../pages/mainpage/MainPage';

const Router = ({ darkMode, setDarkMode }) => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}
			>
				<Route
					index
					element={<MainPage darkMode={darkMode} setDarkMode={setDarkMode} />}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
