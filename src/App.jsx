/*
import Header from './Header.jsx'
import Hero from './Hero.jsx'



function App() {
    return(
      <>
        
        <Hero/>
        
        
        
      </>
      
    );
}

export default App
*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Forum from "./pages/Forum";
import Navbar from "./Nav";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App