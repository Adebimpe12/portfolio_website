import React from 'react'

const ClickEventHandler = () => {
    function clickHandler(){
        console.log('You clicked action button')
    }
  return (
    <div>
        <button onClick={clickHandler}>Action</button>
    </div>
  )
}

export default ClickEventHandler
