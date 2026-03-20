import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="btn btn-light me-2">
          Vissza a főoldalra
        </NavLink>
        <NavLink to="/books" className="nav-link">
          Könyvek listája
        </NavLink>
        <NavLink to="/new" className="nav-link">
          Új könyv
        </NavLink>
        <NavLink to="/img" className="nav-link">
          Borító módosítása
        </NavLink>
      </div>
    </nav>
  );
}
