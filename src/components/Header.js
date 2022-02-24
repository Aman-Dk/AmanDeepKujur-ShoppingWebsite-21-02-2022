import React from 'react'
import {Navbar,Nav,NavDropdown } from 'react-bootstrap'

import '../Styles.css'
import logo from '../images/logo.PNG'
import contact from '../images/contact.svg'
import location from '../images/location.svg'

export default function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light box">

        <div className="container-fluid ">
            {/* logo */}
            <div className='m-0 p-0 d-flex' style={{alignItems:'center'}}>
                <a className="navbar-brand p-0" href="/">
                    <img src={`${logo}`} className='logo' alt='logo'/>
                </a>
                
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

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="links">
                    <Nav.Link className="px-auto"  href="#home">
                        Contact Us
                        <img src={`${contact}`} alt='contact'/>
                    </Nav.Link>
                    <Nav.Link className="p-auto" href="#link">
                        Cart
                        <img src={`${contact}`} alt='contact'/>                    
                    </Nav.Link>
                    <NavDropdown className="p-auto subLinks" title="MyAccount" id="basic-nav-dropdown text-dark">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse> 

            {/* toggle button */}
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:'end'}}>
            <ul className="navbar-nav mb-2 mb-lg-0">

                <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cart
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">My Account</a>
                </li>

            </ul>
            </div> */}
        </div>
        </nav>
    </header>
  )
}

