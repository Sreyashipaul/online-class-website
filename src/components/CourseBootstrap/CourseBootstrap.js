import React from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './CourseBootstrap.css';


const CourseBootstrap = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Online Course</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Categories</Nav.Link>
      <Nav.Link href="#features">Login </Nav.Link>
      <Nav.Link href="#pricing">Logout</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  <br />
        </div>
    );
};

export default CourseBootstrap;