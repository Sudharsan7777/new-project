import { Sidenav, Nav,  Container } from 'rsuite';
import Box from '../../components/box/Box';
import Presbutton from '../../components/button/Button';
import SearchBox from '../../components/serachbox/SerchBox';
import Typography from '../../components/typography/typography';


const SideBar = () => {

return(
  <Container>
  <div  className='body'>
    <Sidenav defaultOpenKeys={['1']} className='sidenav'  >
      <Sidenav.Body >
        <Nav activeKey="1" >
          <Nav.Menu eventKey="1" title={<span className="department-title">DEPARTMENT</span>} noCaret>
            <Nav.Menu eventKey="1-1" title='New Arrival' noCaret>
                <Nav.Item eventKey='1-1-1' >Accessories</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="1-2" title='shop' noCaret>
                <Nav.Item eventKey='1-2-1'>New styles</Nav.Item>
            </Nav.Menu>
            <Nav.Item eventKey="1-3">Devices</Nav.Item>
            <Nav.Item eventKey="1-4">Loyalty</Nav.Item>
            <Nav.Item eventKey="1-5">Visit Depth</Nav.Item>
            <Nav.Item eventKey="1-6">Devices</Nav.Item>
            <Nav.Item eventKey="1-7">Look</Nav.Item>
            <Nav.Item eventKey="1-8">Computers</Nav.Item>
            <Nav.Item eventKey="1-9">Devices</Nav.Item>
            <Nav.Item eventKey="1-10">TV&Audio</Nav.Item> 
            <Nav.Item eventKey="1-11">Loyalty</Nav.Item>           
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
    <div className='subody'>
    <SearchBox
        type='text'
        className='search'
        placeholder='search'
      />     
   <div className='banner'>  
  <Box src='https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/m/k/mk2-banner-03.jpeg'
  alt='none'
  className='image'
  ><div className='content1'><Typography msg='Beautiful 2023'
  tag='div'
  color='black'
  size='l' bolder/>
  <Typography msg='NEW ARRIVALS'
  tag='div'
  color='black'
  size='xl' bolder/>
    <Presbutton 
  text='discover me'
  classname='discover'
  /></div></Box>


  <Box src='https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/m/k/mk2-banner-04.jpeg'
  alt='none'
  className='image2'
  ><div className='content2' > Top view in this week
  TRENDING</div>
  </Box>
  </div> 
  </div>
  </div>
  </Container>

)
}

export default SideBar
