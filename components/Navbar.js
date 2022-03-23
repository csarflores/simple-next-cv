import Link from "next/link"
import { linkedin, whatsapp } from "../utils/profile"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
            <a className="navbar-brand">
            César Flores
            </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            {/*
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href="/github">
                <a className="nav-link">Github</a>
              </Link>
            </li>
            */}
            <li className="nav-item">
              <Link href={linkedin}>
                <a className="nav-link" target="_bank">LinkedIn</a>
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
  );
};

export default Navbar;
