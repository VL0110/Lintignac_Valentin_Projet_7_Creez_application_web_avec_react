// Import react, react-router-dom, style global et pages

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import Error from '../pages/Error/index'
import Logement from '../pages/Logement/index'

// Création "const" style général des pages (css)

const GlobalStyle = createGlobalStyle`
	html {
	  height: 100%;
	}
	body {
	  font-family: 'Montserrat';
	  height: 100%;
	  margin: 15px 0px;
	}
	* { 
	  padding: 0;
	  margin: 0;
	  box-sizing: border-box;
	}
	`
// Mise en place "const" root avec les routes pour chacune des pages

function App() {
    return (
	  <React.StrictMode>
		<GlobalStyle />
		<Router>
		  <Routes>
			<Route exact path="/" element={<Home />} />
			<Route path={`/logement/:id`} element={<Logement />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Error />} />
		  </Routes>
		</Router>
	  </React.StrictMode>
	)
}
    export default App;