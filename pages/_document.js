//Documento creado para editar las partes de html de cada página de la app

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/curriculum.ico" />
          <meta
            name="description"
            content="Curriculum Vitae y Portafolio de proyectos de César Flores. Administrativo y programador."
          />         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
