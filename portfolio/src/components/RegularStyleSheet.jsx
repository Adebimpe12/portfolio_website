import React from 'react'
import './myStyles.css'

const RegularStyleSheet = (props) => {
    const className= props.primary ? 'primary' : 'secondary'
  return (
    <div>
        <h3 className={className}>Learning how to style react component</h3>
    </div>
  )
}

export default RegularStyleSheet