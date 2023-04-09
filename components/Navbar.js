import Link from "next/link"
import { github, linkedin, whatsapp } from "../utils/profile"

function openCloseNavbar() {
  var x = document.getElementById("navbarColor03");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
            <a className="navbar-brand">
            César Flores
            </a>
        </Link>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon" onClick={openCloseNavbar}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href={linkedin}>
                <a className="nav-link" target="_bank">LinkedIn</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={github}>
                <a className="nav-link" target="_bank">Github</a>
              </Link>
            </li>
          </ul>
          <Link href={whatsapp}>
            <a className="btn btn-primary">
            Contrátame
            </a>
        </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
