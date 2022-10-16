import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col,Container,Row,Navbar,Nav} from "react-bootstrap";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Loanform() {
  const navigate = useNavigate();
  /*
  useEffect(() => {
    if(!localStorage.getItem("token") || !localStorage.getItem("user")){
      navigate("/signin");  
    }
  },[])
  */
  const signout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Loan Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} onClick={signout}>
              signout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>

        <Row className="mt-3">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicAccountNumber">
          <Form.Label>Account Number</Form.Label>
          <Form.Control type="Account Number" placeholder="Enter Account Number" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicIFSCCode">
          <Form.Label>IFSC Code</Form.Label>
          <Form.Control type="Account Number" placeholder="Enter IFSC Code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLoanType">
          <Form.Label>Loan Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Loan Type</option>
            <option value="1">Home Loan</option>
            <option value="2">Personal Loan</option>
            <option value="3">Student Loan</option>
            <option value="4">Car Loan</option>
          </Form.Select>
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicLoanAmount">
          <Form.Label>Loan Amount</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Loan Amount</option>
            <option value="1">100000-500000</option>
            <option value="2">500000-1000000</option>
            <option value="3">More than 1000000</option>
            <option value="4">More than 2000000</option>
            <option value="5">More than 3000000</option>
          </Form.Select>
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicLoanPeriod">
          <Form.Label>Loan Period</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Loan Duration</option>
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
            <option value="5">5 Years</option>
          </Form.Select>
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formLoanInterest">
          <Form.Label>Loan Interest</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Loan Interest</option>
            <option value="1">Home-5%</option>
            <option value="2">personal-10%</option>
            <option value="3">Student-4.5%</option>
            <option value="4">Car-7.5%</option>
          </Form.Select>
        </Form.Group> 

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
   </Row>
    </Container>
    </div>
  );
}

export default Loanform;