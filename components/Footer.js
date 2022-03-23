import Link from "next/link"
import { whatsapp } from "../utils/profile"

const Footer = () => {
    return (
        <footer className="text-center bg-light">
            <div className="container p-4">
                <h4>¿Tomamos un café?</h4>
                <Link href={whatsapp}>
                    <a className="btn btn-primary my-3">Agendar una reunión</a>
                </Link>
                <p>&copy; César Flores - Simplex CV theme<br/>
                {/*Año actual*/}
                {new Date().getFullYear()} - Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer