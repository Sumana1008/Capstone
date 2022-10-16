import React from'react';
import {Navbar,Nav ,NavDropdown,Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Dashboard() {
  const navigate = useNavigate();
  
  /* 
  useEffect(() => {
    if(!localStorage.getItem("token") || !localStorage.getItem("user")){
      navigate("/signin");  
    }
  },[])
  */
 
  const applybutton = (e) =>{
    navigate("/loanform");
  }
  const statusbutton = () => {
    navigate("/loanstatus");
  }
  const signoutfunc = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  }
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} onClick={signoutfunc}>
              signout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    <>
      <Button onClick={applybutton} variant="primary" size="lg" active>
        Apply Loan
      </Button>
      <br></br>
<br></br>
<br></br>
      <Button onClick={statusbutton} variant="secondary" size="lg" active>
        Loan Status
      </Button>
    </>


</div>
  );
}

export default Dashboard;