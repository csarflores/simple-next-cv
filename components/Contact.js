import { contact } from "../utils/profile"
import { whatsapp } from "../utils/profile"
import Link from "next/link"

const Contact = () => {    
    return (
        <div className="card-body">
            <h2 className="pt-2">Contacto</h2>
            {/*Recorro el arreglo skills de profile.js e imprimo cada habilidad*/}
            {
                contact.map(({fechaNacimiento, domicilio, ciudad, provincia, pais, celular, email}, i) => (
                    <div className="py-3" key={i}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Email:</strong> {email}</li>
                            <li className="list-group-item"><strong>Celular: </strong> 
                                <Link href={whatsapp}>
                                    <a target="_blank">{celular}</a>
                                </Link>
                            </li>
                            <li className="list-group-item"><strong>Ciudad:</strong> {ciudad}, {provincia}, {pais}</li>
                            <li className="list-group-item"><strong>Edad:</strong> {fechaNacimiento}</li>
                        </ul>                        
                    </div>
                ))
            }
        </div>
    )
}

export default Contact
