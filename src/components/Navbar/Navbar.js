import React from 'react'
import { Navbar as NavbarB, Nav, Container, NavDropdown } from 'react-bootstrap'


const Navbar = () => {
    return (
        <NavbarB bg='dark' variant='dark' expand='lg'>
            <Container>
                <NavbarB.Brand href='#home'>Zoodiaco React</NavbarB.Brand>
                <NavbarB.Toggle aria-controls='basic-navbar-nav' />
                <NavbarB.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#link'>Agrupados Por Elementos</Nav.Link>
                    <NavDropdown title='Meses' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>
    )
}

export default Navbar