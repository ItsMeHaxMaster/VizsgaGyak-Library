import NavBar from "../components/NavBar";

export default function Img() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <h2 className="my-5 text-center">Borító módosítása</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">Könyv kiválasztása</label>

                <select className="form-select">
                  <option>Egri csillagok</option>
                  <option>A Pál utcai fiúk</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Új borító link</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="kepek/egri.jpg"
                ></input>
              </div>

              <button className="btn btn-warning w-100 mt-5">Mentés</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
