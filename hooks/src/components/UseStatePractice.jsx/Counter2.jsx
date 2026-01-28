import {useState} from 'react'

const Counter2 = () => {
    const [count, setCount] = useState(0)
    const initialCount = 0;
    const increase =()=>{
        for(let i=0; i<2; i++)
        setCount(prevCount => prevCount + 1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>increase</button>
        {/* <button onClick={()=>setCount(count + 1)}>increase</button> */}
        <button onClick={()=>setCount(count - 1)}>decrease</button>
        <div>       
        <button onClick={()=>setCount(initialCount)}>reset</button>
        </div>
    </div>
  )
}

export default Counter2