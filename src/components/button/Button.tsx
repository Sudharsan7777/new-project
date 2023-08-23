import React from 'react'
import Typography from '../typography/typography';


export interface ButtonProps{
    value?: string;
    width?: number;
    height ? : number;
    text ? : string;
    borderradius?: number;
    style?: React.CSSProperties;
    classname?: string;
  
  }

const Presbutton: React.FC<ButtonProps> = ({value, text, classname}) => {
 
  return (
    <div>
        <form action="/" method="get" >
        <button type="submit" value={value}  className={classname}>
            <Typography msg={text}
            tag='div' />
        </button>
        </form>
     </div>
  )
}

export default Presbutton