import {Navbar, Container, Nav, NavLink, Button} from "react-bootstrap";
import logo from "../assets/img-logo.png"



const NavComponent = () => {
    return (
        <>
        
            
            <Navbar expand="lg">
                <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink href="/home">Home</NavLink>
                    <NavLink href="/menu">Menu</NavLink>
                    <NavLink href="/about">Tentangkami</NavLink>
                    <div className="vr"></div>
                    <NavLink href="/profil" className="ms-3">Profil</NavLink>
                    <NavLink href="/keranjang">Keranjang</NavLink>

                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </>
    )
} 

export default NavComponent;