
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import './Nav.css'
import logo from '../../../images/logos/logo-ER.png'
import logo1 from '../../../images/carosel/info-after.png'



function Navb() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block border-1">
            <NavLink
              href="index.html"
              className="navbar-brand d-flex align-items-center justify-content-center"
              >
              <img className="logo" src={logo} alt="img" />
            </NavLink>
          </div>
          <div className="col-lg-9">
            <div className="row bg-white border-2 d-none d-lg-flex">
              <div className="col-lg-7 text-left">
                <ul className="d-inline-flex align-items-center py-2 px-4 elite">
                  <li>eliterealty@example.com</li>
                   <li>+9900000678</li>
                   <li>Mon-Fri 9am-5pm</li>
                </ul>
              </div>
              <NavLink to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4">
                  <img src={logo} alt="img" />
                </h1>
              </NavLink>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
              <NavLink to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4">
                  <img src={logo} alt="img" />
                </h1>
              </NavLink>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                >
                <span className="navbar-toggler-icon shadow-none" />
              </button>
              <div
                className="collapse nav navbar-collapse justify-content-between"
                id="navbarCollapse"
                >
                <div className="navbar-nav mr-auto p-4">
                  <NavLink to="/" className="nav-item nav-link px-4">
                    HOME
                  </NavLink>
                  <NavLink to="/aboutus" className="nav-item nav-link px-4 ">
                    ABOUT US
                  </NavLink>
                  <NavLink to="/aboutus" className="nav-item nav-link px-4">
                  SERVICES
                  </NavLink>
                  <NavLink to="/aboutus" className="nav-item nav-link px-4">
                  BRANDS
                  </NavLink>
                  <NavLink to="/aboutus" className="nav-item nav-link px-4">
                  CONTACT US
                  </NavLink>
                  <NavLink to="/aboutus" className="nav-item nav-link px-4">
                  BLOG
                  </NavLink>
                </div>
                <NavLink to="/" className="infologo mr-3 d-none d-lg-block ">
                  {/* <img src={logo1} alt="" /> */}
                </NavLink>
                
              </div>
            </nav>
          </div>
        </div>
      </div>
  );
}

export default Navb;







