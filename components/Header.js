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
              <h5>Desarrollador Frontend</h5>
              <article className="pt-3">
                <p>
                  Soy un profesional autodidacta y actualmente estoy estudiando la Tecnicatura en Programación en la UTN.
                </p>
                <p>
                  A lo largo de mi trayectoria, he tenido la oportunidad de trabajar en varios proyectos desafiantes que me han permitido crecer y mejorar tanto profesional como personalmente. Estos desafíos me han impulsado a buscar constantemente oportunidades de capacitación y aprendizaje de nuevas tecnologías.
                </p>
                <p>
                  Soy una persona dedicada y comprometida, disfruto trabajando en equipo para lograr los mejores resultados posibles. Mi enfoque se centra en brindar soluciones eficientes y de calidad, siempre buscando superar las expectativas.
                </p>
                <p>
                  Mi deseo es formar parte de una empresa desafiante e innovadora, donde pueda aportar valor desde mi experiencia y conocimientos, como también desarrollar nuevas habilidades profesionales y relaciones personales.
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
