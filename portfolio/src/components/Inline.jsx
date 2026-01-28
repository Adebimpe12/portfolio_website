import React from 'react'
import moduleStyles from "./myAppStyles.module.css";

const Inline = () => {
   const heading={
    fontSize: '100px',
    color: 'tomato'
   }     
   const heading2={
    fontSize: '50px',
    color: 'blue'
   }
  return (
    <div>
      <h3 style={heading}>My name is Tolu</h3>
      <h3 style={heading2}>This is the second inline style</h3>
      <h3 className={moduleStyles.success}>This is the second inline style</h3>
      <h3 className="error">This is the second inline style</h3>
    </div>
  )
}

export default Inline
