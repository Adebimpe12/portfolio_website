import React from 'react'

const Employee = (props) => {
        const{name, gender, country, age} = props
        return (
          <div>
                <h3>{`Name: ${name} Gender: ${gender} Country: ${country} Age: ${age}`}</h3>
          </div>
        );
}

export default Employee