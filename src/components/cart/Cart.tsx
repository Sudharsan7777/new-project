
import React, { useState, FC } from "react";
import { TfiTrash } from "react-icons/tfi";
import './Cart.css'

interface CartProps{
    className?:string;

}

const Cart: FC<CartProps> = ({className}) => {
    const [Count, setCount] = useState(0)
  function IncrementValue(){
    setCount(prevValue => prevValue+1)
  }
  function DecrementValue(){
    if (Count>0){
        setCount(prevValue => prevValue-1)
    }
    else{
        setCount(0)
    }
  }
  function Clear(){
    setCount(0)
  }


  return (
    < > 
    <div className={className}>
    <div className="cart-option">
    <div className="cart-add">
      <button onClick={IncrementValue} className="increment">+</button>
      <span>{Count}</span>
      <button onClick={DecrementValue} className="decrement">-</button>
      </div>
      <button onClick={Clear} className="clear"><TfiTrash/></button>
      </div>
      </div>
    </>
  )
}

export default Cart


