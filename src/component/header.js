import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap"
const Header = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/note">Note</Nav.Link>
    
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header