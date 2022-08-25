
import React from 'react';
import Inicial from "./Volkswagen/Roadmap-inovacao/pages/Inicial";
import Segundo from "./Volkswagen/Roadmap-inovacao/pages/Create";
import Error from "./Volkswagen/Roadmap-inovacao/pages/Error";
import Edit from "./Volkswagen/Roadmap-inovacao/pages/Edit";
import Visualizar from "./Volkswagen/Roadmap-inovacao/pages/Visualizar";
import Dashboards from "./Volkswagen/Roadmap-inovacao/pages/Dashboards";
import Login from "./Volkswagen/Roadmap-inovacao/pages/login";
import Register from "./Volkswagen/Roadmap-inovacao/pages/Register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastro" element={<Segundo />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="*" element={<Error />} />
        <Route path="/visualizar/:id" element={<Visualizar />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
