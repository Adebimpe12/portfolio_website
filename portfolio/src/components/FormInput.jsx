import React,{useState} from 'react'

const FormInput = () => {
    const[name, setName] = useState('')
  return (
    <form action="">
        <div>
            <label htmlFor="">
                Name:
                <input type="text" value={name} onChange={()=>setName}/>
            </label>
        </div>
    </form>
  )
}

export default FormInput