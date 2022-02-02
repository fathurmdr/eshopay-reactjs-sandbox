import React, { useState } from 'react'

export default function EmployeeList() {
    const listOfEmployee = [
        {empId : 1, fullName : "Rudi", salary : 4500},
        {empId : 2, fullName : "Nofal", salary : 5500},
        {empId : 3, fullName : "Dani", salary : 3500},
    ];

    const [employees,setEmployees] = useState(listOfEmployee);

    const setRaiseSalary = (id) =>{
        setEmployees(
            [...employees.map(emp =>{
                if( id === emp.empId){
                    emp.salary = emp.salary + Math.ceil(emp.salary * .01);
                    return emp;
                }else{
                    return emp;
                }
            })]
        );
    }

    return (
        <div>
            <h3>List Of Employees</h3>
            <ul>
                {
                  (employees || [] ).map(emp =>(
                      <li key={emp.empId}>
                          <p>EmpId : {emp.empId}</p>
                          <p>FullName : {emp.fullName}</p>
                          <p>Salary : {emp.salary}</p>
                          <button onClick={()=> setRaiseSalary(emp.empId)}>Raise Salary 10%</button>
                          <button>Cut Salary 5%</button>
                      </li>
                  ))   
                }
            </ul>
        </div>
    )
}
