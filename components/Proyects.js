import Link from "next/link";
import { proyects } from "../utils/proyects";
import Image from "next/image";

const Proyect = () => {
    return (
        <div>
        { proyects.map(({ nameProyect, typeProyect, description, imageURL, urlProyect, github }, i) => (
                <div className="col-md-12 m-4" key={i}>
                <div className="card card-body border-dark">
                  <div className="row">
                    <div className="col-md-4 py-2">
                      <Image
                        src={`/${imageURL}`}
                        alt={nameProyect +' - '+ typeProyect}
                        width={300}
                        height={150}
                        layout="responsive"
                        className="float-start img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h1>{nameProyect}</h1>
                      <h5>{typeProyect}</h5>
                      <article className="pt-3">
                        <p>
                            {description}
                        </p>
                        <div className="d-flex flex-row mb-3">
                            <Link href={urlProyect}>
                                <a target="_blank" className="m-2">Visitar proyecto</a>
                            </Link>                     
                            <Link href={github}>
                                <a target="_blank" className="m-2">Ver en Github</a>
                            </Link>
                        </div>                                             
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              

            ))}
        </div>      
    );
  };
  
  export default Proyect;