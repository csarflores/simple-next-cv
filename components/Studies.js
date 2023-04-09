import { studies } from "../utils/profile";

const Studies = () => {   
    return (
    <>
      <h2 className="pt-5">Estudios</h2>
      <table className="table table-hover d-grid">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Institución</th>
            <th scope="col">Año</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {/*Recorro el arreglo skills de profile.js e imprimo cada habilidad*/}
          {studies.map(({ title, institution, from, to, status }, i) => (
            <tr key={i}>
              <th scope="row">{title}</th>
              <td>{institution}</td>
              <td>{from} - {to}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    )
}

export default Studies