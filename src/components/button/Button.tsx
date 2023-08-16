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

const Presbutton: React.FC<ButtonProps> = ({width, value, height, text, style, borderradius, classname}) => {
  return (
    <div>
        <form action="/" method="get" >
        <button type="submit" value={value} style={{ width:`${width}px`, height:`${height}px`, borderRadius:`${borderradius}px`}} className={classname}>
            <Typography msg={text}
            tag='div' />
        </button>
        </form>
     </div>
  )
}

export default Presbutton