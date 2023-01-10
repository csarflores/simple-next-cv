import Image from "next/image";
import profilePic from "../public/202201-perfil.jpg";

const Header = () => {
  return (
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body border-dark">
          <div className="row">
            <div className="col-md-4 py-2">
              <Image
                src={profilePic}
                alt="César Flores perfil"
                layout="responsive"
                className="float-start img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h1>César Flores</h1>
              <h5>Desarrollador Front-End y Administrativo</h5>
              <article className="pt-3">
                <p>
                  Soy una persona seria, honesta y responsable, proactivo, con
                  capacidad para trabajar en equipo, bajo presión y motivado por
                  aprender nuevas tareas y emprender nuevos desafíos.
                </p>
                <p>
                  Profesionalmente me destaco por ser lógico y analítico, busco
                  desarrollar e implementar sistemas de mejora continua que
                  aporten valor y crecimiento a mi área y equipo de trabajo,
                  haciéndolos más eficaces y eficientes. Además cuento con
                  experiencia y conocimiento técnico en el desarrollo y
                  utilización sistemas ERP y BI.
                </p>
                <p>
                  Mi deseo es formar parte de una empresa desafiante e
                  innovadora donde pueda aportar valor desde mi experiencia y
                  conocimientos, pero también aprender y desarrollar nuevas
                  habilidades profesionales y personales.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
