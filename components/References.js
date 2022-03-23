import { references } from "../utils/profile";

const Experience = () => {
    return (
        <>
            <h2 className="pt-5">Referencias</h2>
            <div className="card-group">
                {/*Recorro el arreglo skills de profile.js e imprimo cada habilidad*/}
                {
                    references.map(({nameSurname, relation, company, phone, email}, i) => (
                        <div className="card m-2" key={i}>
                            <div className="card-body">
                                <h4 className="card-title">{nameSurname}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{company}</h6>
                                <uo className="list-unstyled">
                                    <li className="card-text">{relation}</li>
                                    <li className="card-text">{phone}</li>
                                    <li className="card-text">{email}</li>
                                </uo>
                            </div>
                        </div>
                    ))
                }
            </div>    
        </>
    )
}    

export default Experience