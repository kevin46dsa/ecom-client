import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routesr from "./routes/Routes";
import ResponsiveAppBar from './Components/Navbar/Navbar';
//import Header from './Components/Header/Header';

// import Logo from './Components/css/logo.png'

/// temp stored this here to access fire base



function App() {
	return (
		<BrowserRouter>
			{/*<Header /><br />*/}
			<ResponsiveAppBar/>

			<Routesr />
		</BrowserRouter>
	);
}

export default App;