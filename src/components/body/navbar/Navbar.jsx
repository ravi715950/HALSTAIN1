import './Navbar.css'
import { NavLink } from 'react-router-dom';



const Navbar=()=> {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block border-1">
            <NavLink
              to="/"
              className="navbar-brand d-flex align-items-center justify-content-center"
              >
              <h2>HALSTAIN</h2>
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
             
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
              <NavLink to="/" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-dark text-uppercase">HALSTAIN</h1>
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
                  <NavLink to="/services" className="nav-item nav-link px-4">
                  SERVICES
                  </NavLink>
                  
                  <NavLink to="/contactus" className="nav-item nav-link px-4">
                  CONTACT US
                  </NavLink>
                 
                </div>
               
                
              </div>
            </nav>
          </div>
        </div>
      </div>
  );
}

export default Navbar;







