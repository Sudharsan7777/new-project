import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import Box from '../box/Box';
import Button from 'rsuite';
import Typography from '../typography/typography';

const CustomNavbar = () =>{


return (
  

  <div >
    <Navbar className='head' >
      <Nav >
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
      <Nav className='country' pullRight>
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
)};

export default CustomNavbar