import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Error from './pages/Error/index'
import Logement from './pages/Logement/index'

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


const root = ReactDOM.createRoot(document.getElementById('root'))
	root.render(
	  <React.StrictMode>
		<GlobalStyle />
		<Router>
		  <Routes>
			<Route exact path="/accueil" element={<Home />} />
			<Route path={`/logement/:id`} element={<Logement />} />
			<Route path="/about" element={<About />} />
			<Route path="/*" element={<Error />} />
		  </Routes>
		</Router>
	  </React.StrictMode>
	)