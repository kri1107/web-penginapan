import React, { useState, useEffect } from "react";
import {NavDropdown, Navbar, Nav, Container} from "react-bootstrap";

const NavbarComp = () => {

    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 680) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect( () => {
        changeBackgroundColor();
    })

    return (
    <div className="sticky-top">
        <Navbar variant="dark" expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
            <Navbar.Brand href="#home" className="fw-bold">kri.ap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
                <Nav.Link href="#home" className="mx-2">
                    Home
                </Nav.Link>
                <Nav.Link href="#gallery" className="mx-2">
                    Gallery
                </Nav.Link>
                <Nav.Link href="#services" className="mx-2">
                    Services
                </Nav.Link>
                <Nav.Link href="#faq" className="mx-2">
                    FAQ
                </Nav.Link>

                {/* Dropdown */}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    );
};

export default NavbarComp;