import { experience } from "../utils/profile";
import Link from "next/link";

const Experience = () => {
  return (
    <>
      <h2 className="pt-4">Experiencia</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Ocupación</th>
            <th scope="col">Empresa</th>
            <th scope="col">Año</th>
          </tr>
        </thead>
        <tbody>
          {/*Recorro el arreglo skills de profile.js e imprimo cada experiencia*/}
          {experience.map(({ company, from, to, ocupation }, i) => (
            <tr key={i}>
              <th scope="row">{ocupation}</th>
              <td>{company}</td>
              <td>{from} - {to}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/experience">
        <a className="btn btn-outline-info btn-sm">Conoce más</a>
      </Link>
    </>
  );
};

export default Experience;
