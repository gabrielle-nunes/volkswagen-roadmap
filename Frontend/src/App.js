
import React from 'react';
import './App.css';
import Inicial from "./teste/teste-inicial/Main/Inicial";
import Segundo from "./teste/teste-inicial/PaginaDois/Segundo";
import Error from "./teste/teste-inicial/ErroPage/Error";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastro" element={<Segundo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
