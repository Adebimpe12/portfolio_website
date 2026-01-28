import React from "react";
import Employee from "./Employee";

const EmployeeList = () => {
  const employees = [
    {
      name: "john",
      gender: "male",
      country: "UK",
      age: "27",
      id: 1,
    },
    {
      name: "angela",
      gender: "female",
      country: "UK",
      age: "19",
      id: 2,
    },
    {
      name: "daisy",
      gender: "female",
      country: "USA",
      age: "25",
      id: 3,
    },
    {
      name: "mike",
      gender: "male",
      country: "India",
      age: "24",
      id: 4,
    },
  ];
  return (
    //  <div>
    //     <h3>{employees[0]}</h3>
    //     <h3>{employees[1]}</h3>
    //     <h3>{employees[2]}</h3>
    //     <h3>{employees[3]}</h3>
    //     Array.map()
    //  </div>

    // <div>
    //     {employees.map((employee) => {
    //       return <h3>{employee}</h3>
    //     })
    // }
    // </div>

    // <div>
    //   {employees.map((employee) => {
    //     return (
    //       <div>
    //         <h3>{employee.name}</h3>
    //         <h3>{employee.gender}</h3>
    //         <h3>{employee.country}</h3>
    //         <h3>{employee.age}</h3>
    //       </div>
    //     );
    //   })}
    // </div>

    // <div>
    //   {employees.map((employee) => {
    //     return (
    //       <div>
    //             <h3>{`Name: ${employee.name} Gender: ${employee.gender} Country: ${employee.country} Age: ${employee.age}`}</h3>
    //       </div>
    //     );
    //   })}
    // </div>

    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <Employee
            name={employee.name}
            gender={employee.gender}
            country={employee.country}
            age={employee.age}
          />
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
