import { useEffect, useState } from "react";
import axios from "axios";
import Quote from "./components/Quote";
import Formulario from "./components/Formulario";
import Sidebar from "./components/Sidebar";
import Suasfrases  from "./components/Suasfrases";
import Home from "./components/Home"
import * as FaIcons from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="App">
          <Router>
            <Sidebar />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/suasfrases' element={<Suasfrases />} />
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;


      