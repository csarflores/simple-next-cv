import { skills } from "../utils/profile";

const Skills = () => {
  return (
    <div className="card-body">
      <h2>Habilidades</h2>
      {/*Recorro el arreglo skills de profile.js e imprimo cada habilidad*/}
      {skills.map(({ skill, percentage }, i) => (
        <div className="py-3" key={i}>
          <h6>{skill}</h6>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: `${percentage}%` }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
