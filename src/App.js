import React from "react";
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./components/includes/Navbar";
import Home from "./pages/Home"
import Footer from "./components/includes/Footer"
import ContactPage from "./pages/ContactPage";
import TagoWallet from "./pages/TagoWallet";
import BlogsPage from "./pages/BlogsPage";
import BlogContent from "./components/blog/BlogContent";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/contact"} element={<ContactPage />}/>
        <Route path={"/tagowallet"} element={<TagoWallet />}/>
        <Route path={"/blogs"} element={<BlogsPage />}/>
        <Route path={"/blogcontent"} element={<BlogContent />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
