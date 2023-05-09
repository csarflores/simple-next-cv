//Documento creado para editar las partes de html de cada página de la app

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang="es">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-B2PL5THCME`}

            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B2PL5THCME');
          `,
            }}
          />
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
      </>
    );
  }
}

export default MyDocument;
