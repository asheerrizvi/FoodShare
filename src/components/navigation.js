import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #CCC;
}
  .navbar-brand, .navbar-nav navbar.link {
    color: #DC143C;
    &:hover {
      color: white;
    }
}
`;

export const Navigation = () => (
	<Styles>
	  <Navbar expand="lg"> 
	    <Navbar.Brand href="/">FoodShare</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
	    <Navbar.Collapse id="basic-navbar-nav">
	      <Nav ClassName="ml-auto">
	        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
	        <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
	        <Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
	</Styles>
);