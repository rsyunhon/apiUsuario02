import React from "react";
import { useNavigate } from "react-router-dom";

export function UsuariosCard({ usuario }) {
  const navigate = useNavigate();
  return (
    <div
      style={{ background: "#000" }}
      onClick={() => {
        navigate("/usuarios/" + usuario.id);
      }}
    >
      <h1>
        {usuario.nombre} {usuario.apellido}
      </h1>
      <p>{usuario.idUsuario}</p>
      <p>{usuario.cargo}</p>      
      <hr />
    </div>
  );
}
