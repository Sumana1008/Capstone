import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from "axios";


function Signup()
{
    const [user, setUser] = useState({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
    });
    const { email, firstname, lastname, password, confirmpassword } = user;
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const FormHandle = (e) => {
        e.preventDefault();
        addDataToServer(user);
        console.log(user);
    };
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/auth/signup", data).then(
                (response) => {
                    console.log(response);
                    alert("User Added Successfully");
                    },
                (error) => {
                    console.log(error);
                    alert("Operation failed");
                }
                );
    };
    const initialValues = {
         email: "",
        firstname: "",
        lastname: "",
        password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.firstname) {
            errors.username = "Firstname is required!";
        } if (!values.lastname) {
            errors.username = "Lastname is required!";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.confirmpassword) {
            errors.confirmpassword = "Confirmpassword is required";
        } else if (values.confirmpassword != values.password) {
            errors.confirmpassword = "ConfirmPassword is not matched";
        }
        return errors;
    };
  
  return (

      <Card border="primary" style={{ width: '30rem',marginLeft:"500px",marginTop:"150px"}}>
     
      <Card.Body>
        <Card.Title className="text-center" size="lg">SignUp</Card.Title>
        
        <FloatingLabel controlId="floatingPassword" label="First Name" className="mb-3">
            <Form.Control id="firstname" name="firstname" type="text" value={formValues.firstname}placeholder="First Name" onChange={(e) => onInputChange(e)} required />
      </FloatingLabel>

       
      <FloatingLabel controlId="floatingPassword" label="Last Name" className="mb-3">
          <Form.Control id="lastname" type="text" name="lastname" value={formValues.lastname} placeholder="Last Name" onChange={(e) => onInputChange(e)} required/>
      </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3">
            <Form.Control id="email" name="email" type="email" value={formValues.email} placeholder="name@example.com" onChange={(e) => onInputChange(e)} required/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control id="password" type="password" name="password"  value={formValues.password} placeholder="Password" onChange={(e) => onInputChange(e)} required/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Confirm Password">
          <Form.Control id="confirmPassword" name="confirmPassword" type="password" value={formValues.confirmpassword} placeholder="Confirm Password" onChange={(e) => onInputChange(e)} required/>
      </FloatingLabel>
        <div style={{textAlign:"center"}}>
          <Button variant="primary" className="mt-3" onClick={FormHandle}>Submit</Button>
        </div>
      </Card.Body>
    </Card>
   
  
  );
}



export default Signup;