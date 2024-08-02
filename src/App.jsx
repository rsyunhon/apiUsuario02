import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import UsuariosPage from "./pages/UsuariosPage";
import UsuariosFormPage from "./pages/UsuariosFormPage";
import { Navigation } from "./componets/Navigation";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/usuarios" />}></Route>
        <Route path="/usuarios" element={<UsuariosPage />}></Route>
        <Route path="/usuarios-create" element={<UsuariosFormPage />}></Route>
        <Route path="/usuarios/:id" element={<UsuariosFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
