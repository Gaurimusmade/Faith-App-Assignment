import React from 'react'
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import '../css/Navbar.css'
const Navbar = () => {
    return (
        <NavbarBs className="mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink} className='links'>
                        About
                    </Nav.Link>
                    <Nav.Link to="/instructor" as={NavLink} className='links'>
                        Instructor
                    </Nav.Link>
                    <Nav.Link to="/reviews" as={NavLink} className='links'>
                        Reviews
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}

export default Navbar