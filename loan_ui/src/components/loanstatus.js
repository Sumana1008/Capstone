import { Button, Card,Form,Table,Container,Nav,Navbar } from "react-bootstrap";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Loanlist(){
    const navigate = useNavigate();
    /*
    useEffect(() => {
        if(!localStorage.getItem("token") || !localStorage.getItem("user")){
        navigate("/signin");  
        }
    },[])
    */
    const divcss = {
        padding:"40px 10rem"
    }
    const cardheader = {
        backgroundColor:"#F9F9F9",
        height:"70px",
        marginBottom:"20px"
    }
    const cardcss = {
        border:"1px solid grey",
        marginBottom:"20px"
    }
    const trcss = {
        border:"1px solid black",
        
    }
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Loan Status</Navbar.Brand>
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
        <div style={divcss}>
            <Card style={cardheader}>
                <Card.Body>
                    <Form.Control style={{float:"left",width:"20rem"}} placeholder="search"/>
                    <Form.Select style={{float:"right",width:"20rem"}}>
                        <option>Filter</option>
                        <option value="ACCEPTED">accepted</option>
                        <option value="PENDING">pending</option>
                        <option value="REJECTED">rejected</option>
                    </Form.Select>

                </Card.Body>
            </Card>

            <Table striped>
            <thead>
                <tr>
                <th>Loan type</th>
                <th>status</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Car loan</td>
                <td style={{color:"red"}}>Pending</td>
                <td><Button style={{float:"right"}}>open</Button></td>
                </tr>
                <tr>
                <td>Home loan</td>
                <td style={{color:"green"}}>Accepted</td>
                <td><Button style={{float:"right"}}>open</Button></td>
                </tr>
            </tbody>
            </Table>
        </div>
        </div>
    );
}
export default Loanlist;