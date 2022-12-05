
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import './Nav.css'
import logo from '../../../images/logos/logo-ER.png'



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
                <div className="d-inline-flex align-items-center py-2 px-4">
                  <small>eliterealty@example.com</small>
                </div>
                <div className="d-inline-flex align-items-center py-2 px-4">
                  <small>+9900000678</small>
                </div>
                <div className=" d-inline-flex align-items-center py-2 px-4">
                  <small>Mon-Fri 9am-5pm</small>
                </div>
              </div>
              <NavLink to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary text-uppercase">
                  {/* <img src="/img/logo.png" alt="img" /> */}
                </h1>
              </NavLink>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
              <NavLink to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary text-uppercase">
                  {/* <img src="/img/logo.png" alt="img" /> */}
                </h1>
              </NavLink>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                >
                <span className="navbar-toggler-icon" />
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








    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div>
        <Navbar.Brand className="logo" href="#home"><img  src={logo} alt="img" /></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className=''>
        <div className='main'>
          <small>eliterealty@example.com</small>
          <small>+9900000678</small>
          <small>Mon-Fri 9am-5pm</small>          
          </div>
          <NavLink to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary text-uppercase">
                  {/* <img src="/img/logo.png" alt="img" /> */}
                </h1>
              </NavLink>
          <Nav className="me-auto">
            <Nav.Link to="/" className="nav-item nav-link px-4">HOME</Nav.Link>
            <Nav.Link to="/aboutus" className="nav-item nav-link px-4 ">ABOUT US</Nav.Link>          
            <Nav.Link to="/aboutus" className="nav-item nav-link px-4 ">SERVICES</Nav.Link>          
            <Nav.Link to="/aboutus" className="nav-item nav-link px-4 ">BRANDS</Nav.Link>          
            <Nav.Link to="/aboutus" className="nav-item nav-link px-4 ">CONTACT US</Nav.Link>          
            <Nav.Link to="/aboutus" className="nav-item nav-link px-4 ">BLOG</Nav.Link>          
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>