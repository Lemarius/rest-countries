import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Layout = ({ darkMode, setDarkMode }) => {
	return (
		<>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Outlet />
		</>
	);
};

export default Layout;
