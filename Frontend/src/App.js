
import React from 'react';
import './App.css';
import Inicial from "./teste/teste-inicial/Main/Inicial";
import Segundo from "./teste/teste-inicial/PaginaDois/Segundo";
import Error from "./teste/teste-inicial/ErroPage/Error";
import Edit from "./teste/teste-inicial/Edit/Edit";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

/*const express = require('express');
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
  //console.log("acessou")
  res.header("Access-Control-Aloow-Origin", "*")
  app.use(cors());
  next();
});*/
function App() {

return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastro" element={<Segundo />} />
        <Route path="" element={<Error />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
