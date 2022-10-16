
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Signup()
{
  
  return (

      <Card border="primary" style={{ width: '30rem',marginLeft:"500px",marginTop:"150px"}}>
     
      <Card.Body>
        <Card.Title className="text-center" size="lg">SignUp</Card.Title>
        
        <FloatingLabel controlId="floatingPassword" label="First Name" className="mb-3">
        <Form.Control type="text" placeholder="First Name" required />
      </FloatingLabel>

       
      <FloatingLabel controlId="floatingPassword" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Last Name" required/>
      </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3">
        <Form.Control type="email" placeholder="name@example.com"  required/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" required/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Confirm Password">
        <Form.Control type="password" placeholder="Confirm Password" required/>
      </FloatingLabel>
        <div style={{textAlign:"center"}}>
          <Button variant="primary" className="mt-3">Submit</Button>
        </div>
      </Card.Body>
    </Card>
   
  
  );
}



export default Signup;