import {useState,useEffect} from 'react'

const EffectExample1 = () => {
    const [count, setCount]=useState(0)
    useEffect(()=>{
        document.title = `You clicked ${count} times`})
  return (
    <div>
        {count}
        <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

export default EffectExample1