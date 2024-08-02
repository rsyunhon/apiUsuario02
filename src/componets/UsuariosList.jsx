import React, { useEffect, useState } from "react";
import { getAllUsuarios } from "../api/usuarios.api";
import { UsuariosCard } from "./UsuariosCard";

export function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    async function loadUsuarios() {
      const res = await getAllUsuarios();
      setUsuarios(res.data);
      console.log(res.data);
    }
    loadUsuarios();
  }, []);
  return (
    <div>
      {usuarios.map((usuario) => (
        <UsuariosCard key={usuario.id} usuario={usuario} />
      ))}
    </div>
  );
}
