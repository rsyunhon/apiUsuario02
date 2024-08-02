import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { createUsuarios, deleteUsuarios } from "../api/usuarios.api";

export default function UsuariosFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    const res = await createUsuarios(data);
    console.log(res);
    navigate("/usuarios");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("nombre", { required: true })}
          placeholder="Ingrese el nombre"
        />
        {errors.nombre && <span>Este campo es requerido</span>}
        <input
          type="text"
          {...register("apellido", { required: true })}
          placeholder="Ingrese el apellido"
        />
        {errors.apellido && <span>Este campo es requerido</span>}
        <input
          type="text"
          {...register("idUsuario", { required: false })}
          placeholder="Ingrese el idUsuario"
        />
        {errors.idUsuario && <span>Este campo es requerido</span>}
        <input
          type="text"
          {...register("cargo", { required: false })}
          placeholder="Ingrese el cargo del Usuario"
        />
        {errors.cargo && <span>Este campo es requerido</span>}        
        <button>Guardar</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const aceptado = window.confirm(
              "Estas seguro de eliminar al Usuario?"
            );
            if (aceptado) {
              await deleteUsuarios(params.id);
              navigate("/usuarios");
            }
          }}
        >
          Eliminar usuario
        </button>
      )}
    </div>
  );
}
