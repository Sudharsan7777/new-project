import React from 'react';
import Box from '../../components/box/Box';
import { Navbar, Nav } from 'rsuite';
import Typography from '../../components/typography/typography';
import ImageLoader from '../../components/box-img/image';

const Imag = () => {

    return(
        <div className='content' >
            <ImageLoader
            className="logo"
            src='https://clauem2.arrowtheme.com/media/logo/default/logo_claue_1.png'
            alt='none'
            />
    <div>
    <div className='info' >
     <div className='contact'>   
        <Typography 
        tag="div" 
        color="black" 
        msg='Call Us: +842437955813'
        size="l" 
        align="right"
        bold/>
<Typography 
        tag="p" 
        color="grey" 
        size="xs" 
        align="right"
        msg='From 8:00 to 17:00 (Mon-Sun) Free by Viet Nam'
    />
    </div>
    <div className='icons'>
   <Box src='https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg'
    className='icon1'
    > </Box>
   <Box src='data:image/png;base64,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'
    className='icon2'
    /> 
    <Box src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAADv7+9sbGz29vZMTEwkJCTV1dVdXV11dXX8/Pzo6OjOzs7g4OD5+fmKiorHx8e+vr5VVVUzMzOpqamjo6MaGhqTk5Ovr68pKSk/Pz85OTlnZ2d7e3sICAi3t7cTExObm5sLx6MfAAAEz0lEQVRoge1ba7eqIBAtNfNt6ullZvb//+RlIM89AcJQzLnrrtX+qOQWGDZ7BlutPvi/kEVBEETZP2Auv9LNmuGc1E30u9Sny/onwuIXqae1jE35O9R58iCMN0nS9jP9/Te4i5hzXeptzuY6C8pmOPArQ0XPLTrd/GTKazH01OxbTlPLl3MegBta7pyP8E5z5wo3rqTkEGvjVnuLD/2NkPu01G9Ayu51AR15rJvvGVHH7h7JuKHjh+XbO1gGZF2HrjWG+y27fyLizmFSTZtYwxr0RORfphnngHgkGncIZ/P2NRgWw3vI2P4d58YmEJFfJOQRCKjZN+ysE/MOeWtusiUlT+zk6Yf8Q/4hd0IVPaEKgDyLDKiKkZHLTV7Ip5qwi59xBgsVGwEOb5IvbmrXvWZODPzAzdqlXrltm+EzSvhBvJHArh3ka8+A3Clu1Z85WYwjax8G1TNEwFUGZJDOpKvni1EBaaV5K1ZGXXHnLy81yCfwFiNLdO/6MjnYL7yvrNg8XZT1kdnJy1GXMoGv3KPJg4PGs5Qhe8ZYm6zMFoJr3Muq4uZvAk0fC5GEmxKi5rGuBukFYTLwKSQY9FB6n3hesotOqvxe1RJTOVnnS3pVKW7u8NAkNgkGF6YEspr1c4EmZ8LcoclhkqSMD2gbsWoWpi+4CNZQie2Kac+EJoe1IdlvkK4VDO24RJ7HYkpg5qXiEAgfumRSr5WEcBLjvTf0nA34lIsfS28OCSR6Z7sq08Yfeb7z2seSWEGu1IsmkjqG6vOWMagC9zeUF0On+G4ih7aLvnJ1lYfpND95eYvYP1ooBQKIIeyWDuoaK0q247XG0LQ9NXwpXpWf3tQYXASETq9GZ1Y2O8vOGG21TQoHfYViW+KzjF466Gup3RjfJB+QbQunjQABrj9Ildk5xAcKEYvVDnkccXLa/BGA5YOVuKOqrm9iwJNfdfbxLaR4fW3drC4CtcEGSIAZ8ntatsdPJOioV24ewrj1A+o6+iXH6ytIgufTErxmbh3EEIncnm88QFDDjFgm06Ji2C27wZEz89yjVEbjXd9FZS9YP3D3rq7cQk4oibvi5QgNbcKvQ+JidJFA6ysInO9vAdBTGXuXdry+ZpPx5O41YPU1GAkOx0o1419sZzlKcQfUOjD7hYvDxwNJrsmv/ZBfEEvIrWqGBfMIZ4S+OlgeBzDlOiCUy61YiUWIk7jBu3EGHHFd6rG7nxP2uPoAFF/8n4HfcA4FFoV3bl1pTwOoLRN8eoBzpTmFuorH2iXOrUSMRmYqon3jhpocd6wx9dc9ibpyfR2tlZE7icCJ1NcqHxTeFYASTocighMw+pq1bPvxr664WKo6oo/abogkrDoQfUiJ0deARuCENbTVB3L/lQEBzPkWkbqKYktsadOQGOeViGRbjetEpK6oApv/uusMRPHXf911BuJ8K/Ved51RW/VV/82AF9yt0RRtSLwrwJ4DQt3V8p3jq7Bnv7xOSfPnELt8eT/V+vHo0VacIFNXoa+9cVAbIu+6EudbsXGzplNX7pHM9T06dRWVTeMqRtdIX4BVPB1O35xh1Vfr0LxJbpzSlC7a8962rYHHXLchBcDJdMalxtcDHSyrODgTctvN4bEjok4wyS/87ZEC/+KflB/o8AcUsTSgVVDGyQAAAABJRU5ErkJggg==' 
     className='icon3'
     /> 
    </div>
    </div>
    
    </div>


        </div>

    )

}

export default Imag