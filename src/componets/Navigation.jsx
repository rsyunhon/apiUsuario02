import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <div>
      <Link to={"/usuarios"}>
        <h1>Usuarios</h1>
      </Link>
      <Link to={"/usuarios-create"}>Nuevo Usuario</Link>
    </div>
  );
}
