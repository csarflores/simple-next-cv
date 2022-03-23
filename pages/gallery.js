import Layout from "../components/Layout"
import Link from "next/link"

const Gallery = () => {
    return(
        <Layout>
            <h1>Galería</h1>
            <div className="content dark">
                <div className="row">
                    <img
                        src="/certificates/01edteam.png"
                        alt="certificado EdTeam"
                        className="img-fluid"
                    />
                </div>
            </div> 
            <Link href="/">
              <a className="btn btn-info btn-sm m-5">Regresar</a>
            </Link>           
        </Layout>
    )
}

export default Gallery