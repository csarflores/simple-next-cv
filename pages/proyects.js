import Layout from "../components/Layout";
import Link from "next/link";
import Proyect from "../components/Proyects";


const Experience = () => {
  return (
    <Layout>
      <div className="col-md-12">
        <div>
          <div className="card-body">
            <h2>Mis proyectos</h2>
            <Proyect />            
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