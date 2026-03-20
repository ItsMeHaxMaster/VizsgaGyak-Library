import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <>
      <header className="d-flex align-items-start">
        <div className="overlay container text-center text-light py-5 rounded-3 mt-3">
          <h1>Könyvtári nyilvántartó rendszer</h1>

          <p>Reszponzív weboldal (Bootstrap + saját CSS)</p>

          <NavLink to="/books" className="btn btn-light me-2">
            Könyvek listája
          </NavLink>

          <NavLink to="/new" className="btn btn-outline-light">
            Új könyv felvétele
          </NavLink>
        </div>
      </header>

      <div className="container cards">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4>Lista</h4>
                <p>Könyvek listája a könyvtárban.</p>

                <NavLink to="/books" className="btn btn-warning">
                  Megnyitás
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4>Új könyv</h4>
                <p>Új könyv rögzítése.</p>

                <NavLink to="/new" className="btn btn-warning">
                  Megnyitás
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4>Borító</h4>
                <p>Könyv borítók módosítása.</p>

                <NavLink to="/img" className="btn btn-warning">
                  Megnyitás
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
