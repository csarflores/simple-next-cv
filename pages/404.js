import Layout from "../components/Layout"
import Link from "next/link"

const custom404 = () => {
    return(        
        <Layout title="Page Not Found">
            <div className="text-center py-3">
                <h1>404</h1>
                <p>Esta página no existe. Por favor retorna a{" "}
                    <Link href="/">
                        <a>inicio.</a>
                    </Link>
                </p>
            </div>
        </Layout>        
    )
}

export default custom404