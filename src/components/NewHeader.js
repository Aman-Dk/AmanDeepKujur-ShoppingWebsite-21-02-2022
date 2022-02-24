import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../Styles.css";

import logo from '../images/logo.PNG'
import contact from '../images/contact.svg'
import location from '../images/location.svg'
import cart from '../images/cart.svg'
import profile from '../images/profile.svg'


export default function NewHeader() {
  return (
    // <header>
      <Navbar expand="sm" className="box">
        <Container>
          <Navbar.Brand style={{ display: "inline-flex"}}>
                {/* <a className="navbar-brand p-0" href="/"> */}
                <Link to="/">
                    <img src={`${logo}`} className='logo' alt='logo'/>
                {/* </a> */}
                </Link>
          </Navbar.Brand>
          <div>
                <ul className='brandAndAddress m-0 p-0'>
                    <li className="nav-item">
                        {/* <a className="nav-link active" aria-current="page" href="/"> */}
                            <span className='brandName'>
                                <strong>Petopia</strong>
                            </span>
                            <address>
                                <span>
                                    <img src={`${location}`} className='m-0 p-0' alt='location'/>
                                </span>
                                
                                11th cross Indira Nagar, adyar-20, Chennai, Tamil Nadu, India
                            </address>
                        {/* </a> */}
                    </li>
                </ul>
            </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:'white'}}/>
          <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'end'}}>
            <Nav className="m-0">
              <Link to="/contact" className="nav-link">
                  ContactUs
                  <img src={`${contact}`} alt='contact'/>
              </Link>
              <Nav.Link href="/cart" className="">
                  Cart
                  <img src={`${cart}`} alt='contact'/>
              </Nav.Link>
              {/* <NavDropdown title="My Account" id="basic-nav-dropdown"  style={{color:'white'}}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown> */}

                <img src={`${profile}`} style={{width:'50px',borderRadius:'50%'}} alt="profile"/>
                <NavDropdown className="p-auto" title="MyAccount" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </header>
  );
}
