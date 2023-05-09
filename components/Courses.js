import Link from "next/link"
import Image from "next/image"
import { courses } from "../utils/profile"

const Courses = () => {
    return (
        <>
            <h2 className="pt-4">Cursos</h2>
            <div className="card-group">
                {
                    courses.map(({institution, nameCourse, from, to, certificateURL}, index) => (

                        <div className="card m-2" key={index}>
                            <div className="overflow">
                                <Image 
                                    src={`/${certificateURL}`} 
                                    alt={nameCourse +' - '+ institution} 
                                    width={500}
                                    height={350}
                                    layout="responsive"
                                    className="card-img-top"
                                />
                            </div>                                
                            <div className="card-body">
                                <h5 className="card-title">{nameCourse}</h5>
                                <h6>{institution}</h6>
                                <p className="card-text">{from} - {to ? `${to}` : "- actualidad"}</p>
                                <Link href={`/${certificateURL}`}>
                                    <a className="card-text" target="_blank">
                                        <small className="text-muted">Ver certificado</small>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Courses