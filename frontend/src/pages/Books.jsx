import NavBar from "../components/NavBar";

export default function Books() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h2>Könyvek listája</h2>

        <p>Minta adatok</p>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cím</th>
              <th>Szerző</th>
              <th>Kiadás éve</th>
              <th>Műfaj</th>
              <th>Borító</th>
              <th>Művelet</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Egri csillagok</td>
              <td>Gárdonyi Géza</td>
              <td>1899</td>
              <td>Történelmi</td>
              <td>kepek/egri.jpg</td>
              <td>
                <button className="btn btn-outline-warning btn-sm">Törlés</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>A Pál utcai fiúk</td>
              <td>Molnár Ferenc</td>
              <td>1907</td>
              <td>Regény</td>
              <td>Nincs kép</td>
              <td>
                <button className="btn btn-outline-warning btn-sm">Törlés</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
