import React,{useState} from 'react'

const FormInput2 = () => {
    const [name, setName]=useState('')
  return (
    <form action="">
        <div>
            <label htmlFor="">
                Name:
                <input type="text" value={name} onChange={()=>setName } />
            </label>
        </div>
    </form>
  )
}

export default FormInput2