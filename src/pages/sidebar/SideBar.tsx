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
                <Nav.Item eventKey='1-1-1' >New arrival</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="1-2" title='shop' noCaret>
                <Nav.Item eventKey='1-2-1'>shop1</Nav.Item>
            </Nav.Menu>
            <Nav.Item eventKey="1-3">Devices</Nav.Item>
            <Nav.Item eventKey="1-4">Loyalty</Nav.Item>
            <Nav.Item eventKey="1-5">Visit Depth</Nav.Item>
            <Nav.Item eventKey="1-6">Devices</Nav.Item>
            <Nav.Item eventKey="1-7">Loyalty</Nav.Item>
            <Nav.Item eventKey="1-8">Visit Depth</Nav.Item>
            <Nav.Item eventKey="1-9">Devices</Nav.Item>
            <Nav.Item eventKey="1-10">Loyalty</Nav.Item> 
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
        width={1000}
        height={40}
        borderradius={5}
      />     
   <div className='banner'>  
  <Box src='https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/m/k/mk2-banner-03.jpeg'
  alt='none'
  width={650}
  height={420}
  top={30}
  left={30}
  className='image'
  ><div className='content1'><Typography msg='Beautiful 2023'
  tag='div'
  color='black'
  size='l' bolder/>
  <Typography msg='NEW ARRIVALS'
  tag='h2'
  color='black'
  size='xxxl' bolder/>
    <Presbutton 
  width={150}
  height={30}
  borderradius={20}
  text='discover me'
  classname='discover'
  /></div></Box>


  <Box src='https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/m/k/mk2-banner-04.jpeg'
  alt='none'
  width={300}
  height={420}
  className='image'
  style={{marginLeft:'50px'}}
  top={80}
  left={50}
  ><div className='container' > Top view in this week
  TRENDING</div>
  </Box>
  </div> 
  </div>
  </div>
  </Container>

)
}

export default SideBar