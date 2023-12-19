import React from "react";
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./components/includes/Navbar";
import Home from "./pages/home";
import Footer from "./components/includes/Footer"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
