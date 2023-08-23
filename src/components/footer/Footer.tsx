import React from 'react'
import Typography from '../typography/typography'
import Box from '../box/Box'
import SearchBox from '../serachbox/SerchBox'
import Presbutton from '../button/Button'

const Footer = () => {
  return (
    <>
       <footer className='footer'>
            <div className='menu1'>
            <Box src='https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/logo-2x.png'
            alt='none'
            width={70}
            height={50}
            style={{marginBottom:'30px'}}/>
            <a href='about:blank' target='_blank'><Typography msg=' 184 Main Rd E, St Albans VIC 3021, Australia'
            tag='div'
            size='m'
            color='grey'
            className='gap'
            /></a>
            <a href='about:blank' target='_blank'><Typography msg=' contact@company.com'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg=' +001 2233 456'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            </div>

            <div className='menu2'>

            <Typography msg=' Categories'
            tag='div'
            size='l'
            color='black'
            className='heading' bold/>
            <a href='about:blank' target='_blank'><Typography msg='Men'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Women'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Accessories'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Shoes'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Denim'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Dress'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            </div>

            <div className='menu3'>

            <Typography msg=' Infomation'
            tag='div'
            size='l'
            color='black' 
            className='heading' bold/>
            <a href='about:blank' target='_blank'><Typography msg='About Us'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Contact Us'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Terms & Conditions'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Returns & Exchanges'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Shipping & Delivery'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Privacy Policy'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            </div>


            <div className='menu4'>

            <Typography msg=' Quick Links'
            tag='div'
            size='l'
            color='black' 
            className='heading' bold/>
            <a href='about:blank' target='_blank'><Typography msg='Store Location'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='My Account'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Accessories'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Orders Tracking'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='Size Guide'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            <a href='about:blank' target='_blank'><Typography msg='FAQs'
            tag='div'
            size='m'
            color='grey'
            className='gap'/></a>
            </div>

            <div className='subscribe'>
        

        <SearchBox type='text'
        className='subscribebox'
        placeholder='Your email address'
        width={300}
        height={40}
        borderradius={50}><Presbutton 
        text='Subscribe'
        classname='subscribebutton'
        /></SearchBox>
        <Box src='https://clauem2.arrowtheme.com/media/wysiwyg/payments.png'
        alt='none'
        width={200}
        height={20}
        style={{marginTop:'60px'}}/>
            </div>

          </footer>
          <div className="copyright">
          <Typography msg='© 2023 Copyright By ArrowTheme.'
          tag='div'
          size='m'
          color='grey'/>
          <div className='end'>
          <Typography msg='Shop'
          tag='div'
          size='m'
          color='grey' 
          className='end-blog'/>
          <Typography msg='Contact'
          tag='div'
          size='m'
          color='grey'
          className='end-blog'/>
          <Typography msg='About Us'
          tag='div'
          size='m'
          color='grey'
          className='end-blog'/>
          <Typography msg='Shop'
          tag='div'
          size='m'
          color='grey'
          className='end-blog'/>  
          </div>  
          </div>      
    </>
  )
}

export default Footer
