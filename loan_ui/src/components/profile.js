import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col,Container,Row,Navbar,Nav} from "react-bootstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Profile() {
    const firstname=localStorage.getItem("fname");
    const lastname=localStorage.getItem("lname")
    const email=localStorage.getItem("user")
    const navigate = useNavigate();
    /*
    useEffect(() => {
      if(!localStorage.getItem("token") || !localStorage.getItem("user")){
        navigate("/signin");  
      }
    },[])
    */
    
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              signout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
    <Form>
      <Form.Group className="mb-3" controlId="formbasicFirstName">
        <Form.Label>FirstName </Form.Label>
        <Form.Control placeholder={firstname} disabled/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>LastName </Form.Label>
        <Form.Control placeholder={lastname} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control placeholder={email} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Old Password :  </Form.Label>
        <Form.Control name="oldp" type="Old Password" placeholder=" Enter password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>New Password :  </Form.Label>
        <Form.Control name="newp" type="New Password" placeholder=" Enter password" />
      </Form.Group>
      
      <Button variant="primary" type="Update">
        Update
      </Button>
    </Form>
    </Col>
   </Row>
    </Container>
    </div>
  );
}

export default Profile;