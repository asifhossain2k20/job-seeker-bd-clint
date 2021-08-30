import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
             <Navbar  bg="primary" className="rounded p-2" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand as={Link} to="/">JobSeekerBD</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link className="nav-text" as={Link} to="/Home">Home</Nav.Link>
                                    <Nav.Link className="nav-text"  as={Link} to="/blogs">Blogs</Nav.Link>
                                    <Nav.Link  className="nav-text" as={Link} to="/developer">Developer</Nav.Link>
                                    <Nav.Link  className="nav-text" as={Link} to="/orderService">ORDER SERVICE</Nav.Link>
                                    <Nav.Link  className="nav-text" as={Link} to="/addJob">ADD JOB</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

        </div>
    );
};

export default NavBar;