import axios from "axios";

const usuariosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/usuarios/",
});

export const getAllUsuarios = () => {
  //return axios.get("http://127.0.0.1:8000/api/v1/usuarios/");
  return usuariosApi.get("/");
};

export const createUsuarios = (usuario) => {
  return usuariosApi.post("/", usuario);
};

export const deleteUsuarios = (id) => {
  return usuariosApi.delete(`/${id}`);
};
