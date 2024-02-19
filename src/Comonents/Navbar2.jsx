import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navbar2 = () => {
  return (
    <Navbar bg="light" expand="lg" style={{gap:"6rem"}}>
      <Navbar.Brand href="./">
        <img style={{height:"4rem"}} src="https://www.nifafinearts.com/images/nifa-new-logo.png" className="img-responsive" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto gap-4">
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="./about">About</Nav.Link>
          <Nav.Link href="./courses">Courses</Nav.Link>
          
        
          {/* <NavDropdown title="Courses" id="basic-nav-dropdown"  href="./courses"  >
            <NavDropdown.Item href="#">B.F.A from UGC Recognised University</NavDropdown.Item>
            <NavDropdown.Item href="#">M.A from UGC Recognised University</NavDropdown.Item>
            <NavDropdown.Item href="#">Two years Advance Diploma in Fine Arts</NavDropdown.Item>
            <NavDropdown.Item href="#">One Year Diploma in Fine Arts</NavDropdown.Item>
            <NavDropdown.Item href="#">6 Months Diploma in Fine Arts</NavDropdown.Item>
            <NavDropdown.Item href="#">Entrance Preparation For N.I.D</NavDropdown.Item>
            <NavDropdown.Item href="#">Entrance Preparation for NIFT</NavDropdown.Item>
            <NavDropdown.Item href="#">Animation Sketching</NavDropdown.Item>
            <NavDropdown.Item href="#">Entrance Preparation for B.F.A</NavDropdown.Item>
            <NavDropdown.Item href="#"> 1 to 3 Months Certificate Hobby Course </NavDropdown.Item>
            <NavDropdown.Item href="#">Kids Diploma (L-2)</NavDropdown.Item>
            <NavDropdown.Item href="#">Kids Diploma (L-1)</NavDropdown.Item>
            <NavDropdown.Item href="#">Hobby Certificate Course For Kids</NavDropdown.Item>
          </NavDropdown> */}
          
            {/* Add other NavDropdown items */}
            {/* <Nav.Link href="./activities" title="Activities" id="basic-nav-dropdown"  >
          <NavDropdown title="Activities" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#">Workshops</NavDropdown.Item>
            <NavDropdown.Item href="#">Outdoor</NavDropdown.Item>
            <NavDropdown.Item href="#">National Art Seminar &amp; Award Show, 2018</NavDropdown.Item>
            <NavDropdown.Item href="#">Media Coverage</NavDropdown.Item>
            <NavDropdown.Item href="#">Judging Art Events</NavDropdown.Item>
            <NavDropdown.Item href="#">Exhibition</NavDropdown.Item>
            <NavDropdown.Item href="#">Daily Activities</NavDropdown.Item>
          </NavDropdown>
          </Nav.Link> */}
          <Nav.Link href="./admission">Admission</Nav.Link>
          <Nav.Link href="./art">Art Gallery</Nav.Link>
          <Nav.Link href="./franchise">Franchise</Nav.Link>
          {/* <Nav.Link href="#">Online Classes</Nav.Link> */}
          <Nav.Link href="./videos">Videos</Nav.Link>
          <Nav.Link href="./payFee">Pay Fee</Nav.Link>
          <Nav.Link href="./contect">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar2;
