import Layout from "../components/Layout";
import { experience } from "../utils/profile";
import Link from "next/link";

const Experience = () => {
  return (
    <Layout>
      <div className="col-md-12">
        <div>
          <div className="card-body">
            <h2>Detalle de experiencia</h2>
            <ul className="py-3">
              {/*Recorro el arreglo skills de profile.js e imprimo cada experiencia*/}
              {experience.map(
                ({ company, from, to, ocupation, description }, i) => (
                  <li className="card border-light mb-3" key={i}>
                    <div className="card-header">
                      <h3 className="card-title">{ocupation}</h3>
                    </div>
                    <div className="card-body">
                      <h5>{company}</h5>
                      <h6>
                        {from} - {to}
                      </h6>
                      <p className="card-text">{description}</p>
                    </div>
                  </li>
                )
              )}
            </ul>
            <Link href="/">
              <a className="btn btn-info btn-sm">Regresar</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
