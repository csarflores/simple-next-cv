import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Studies from "../components/Studies";
import Experience from "../components/Experience";
import References from "../components/References";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <>
      <Head>
        <title>César Flores CV</title>
        <meta
          name="description"
          content="Curriculum Vitae y Portafolio de proyectos de César Flores. Desarrollador Frontend."
        />
      </Head>
      <div>
        <Layout>
          {/*Header card*/}
          <Header />
          {/*Segunda sección*/}
          <div className="row py-4">
            <div className="col-md-4">
              <Contact />
              <Skills />
            </div>
            <div className="col-md-8">
              <Experience />
              <Studies />
              <Courses />
              <References />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
