import logo from "../../assets/iconardes.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
      <header className="container">
         <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand mx-0 p-0 w-50"><img className="w-25" src={logo} alt="logo ardes"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="ms-auto navbar-nav">
                <li className="nav-item">
                   <Link className="nav-link active" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" to={"/signup"}>Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header