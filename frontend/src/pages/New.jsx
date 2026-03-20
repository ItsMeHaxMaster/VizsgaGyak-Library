import NavBar from "../components/NavBar";

export default function New() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-6">
            <h2 className="text-center">Új könyv felvétele</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">Könyv címe</label>
                <input type="text" className="form-control"></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Szerző</label>
                <input type="text" className="form-control"></input>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Kiadás éve</label>
                  <input type="number" className="form-control"></input>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Műfaj</label>
                  <input type="text" className="form-control"></input>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Borító linkje</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="kepek/konyv.jpg"
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
