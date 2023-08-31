import { Navbar, Nav } from 'rsuite';
import React from 'react';


const CustomNavbar = () =>{
return (
  
<header>
  <div >


    <Navbar className='head' >
      <Nav className='nav-left'>
        <Nav.Menu title='Home' trigger='hover' noCaret>
        <Nav.Item ><a href='about:blank' target="_blank">home page 1</a></Nav.Item>
        <Nav.Item ><a href='about:blank' target="_blank">home page 2</a></Nav.Item>
        </Nav.Menu>

        <Nav.Menu title='Shop' trigger='hover' noCaret>
        <Nav.Item ><a href='about:blank' target="_blank">home page 1</a></Nav.Item>
        <Nav.Item ><a href='about:blank' target="_blank">home page 2</a></Nav.Item>
        </Nav.Menu>
        <Nav.Menu title='Product' trigger='hover' noCaret>
        <Nav.Item ><a href='about:blank' target="_blank">home page 1</a></Nav.Item>
        <Nav.Item ><a href='about:blank' target="_blank">home page 2</a></Nav.Item>
        </Nav.Menu>
        <Nav.Menu title='Pages' trigger='hover' noCaret>
        <Nav.Item ><a href='about:blank' target="_blank">home page 1</a></Nav.Item>
        <Nav.Item ><a href='about:blank' target="_blank">home page 2</a></Nav.Item>
        </Nav.Menu>
        <Nav.Menu title='Elemets' trigger='hover' noCaret>
        <Nav.Item ><a href='about:blank' target="_blank">home page 1</a></Nav.Item>
        <Nav.Item ><a href='about:blank' target="_blank">home page 2</a></Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav className='nav-right' pullRight>
      <Nav.Menu title='Country' trigger='hover' noCaret>
        <Nav.Item ><a href='about:blank' target="_blank">home page 1</a></Nav.Item>
        <Nav.Item ><a href='about:blank' target="_blank">home page 2</a></Nav.Item>
        </Nav.Menu>
        <Nav.Menu title='USD-US dollar' trigger='hover' noCaret>
        <Nav.Item ><a href='about:blank' target="_blank">home page 1</a></Nav.Item>
        <Nav.Item ><a href='about:blank' target="_blank">home page 2</a></Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  </div>
  </header>
)};

export default CustomNavbar