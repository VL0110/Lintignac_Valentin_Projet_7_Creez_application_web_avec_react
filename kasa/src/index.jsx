import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Switch from "react-switch";
import Home from './pages/Home/index'
import About from './pages/About/index'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
	root.render(
        <React.StrictMode>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About/>
            </Route>
          </Switch>
        </Router>
      </React.StrictMode>,
	)
    document.getElementById('root')
    export default Header