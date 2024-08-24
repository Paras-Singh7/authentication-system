import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import HomePage from './views/HomePage'
import RegisterPage from './views/RegisterPage'
import LoginPage from './views/LoginPage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'



function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={LoginPage} path="/login" exact />
          <Route component={RegisterPage} path="/register" exact />
          <Route component={HomePage} path="/" exact />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
