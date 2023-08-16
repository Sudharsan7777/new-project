import React from 'react'

export interface SearchProps{
    className?: string;
    type?: string;
    placeholder?: string;
    width?:number;
    height?: number;
    name ?: string;
    borderradius?: number;
    children?: React.ReactNode;
}


const SearchBox: React.FC<SearchProps>=({className, type, placeholder, width, height, name, borderradius, children})=> {
  return (
<form action="/" method="get">
                 <input
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        style={{width:`${width}px`, height:`${height}px`, borderRadius:`${borderradius}px`}}
    >  

    </input>
    {children}
     </form>
  )
}

export default SearchBox