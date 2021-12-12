import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";

const AddEmployee = () => {
    
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();
    
    useEffect(
            ()=>{
                if(employeeId){
                employeeService.getEmployee(employeeId)
                .then(
                    response=>{
                        setName(response.data.name);
                        setDepartment(response.data.department);
                        setLocation(response.data.location);
                    }
                    )
            
                .catch(
                    error => {
                        console.error("Error! x3")
                    }
                )
                }
                else{
                    console.log("employeeId not existing")
                }
            },[]
            )
    
    const saveEmployee = (e) => {
        
        e.preventDefault();
        
        if(employeeId){
            const employee = {employeeId, name, location, department};
        
        employeeService.putEmployee(employee)
        .then(
            response =>{
                console.log("Employee has been updated.", response.data);
                navigate("/myfirstreact/employees");
            }
            )
        .catch(
            error => {
                console.error("Error!!! Error!!!")
            }
                )
        }
        else{
        
        const employee = {name, location, department};
        
        employeeService.postEmployee(employee)
        .then(
            response =>{
                console.log("Employee has been added.", response.data);
                navigate("/employees");
            }
            )
        .catch(
            error => {
                console.error("Error!!! Error!!!")
            }
                )
    }
    
    }
    
    return(
        <div className="container">
            <h3>Add Employee</h3>
        
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Add employee name" onChange={(e)=>setName(e.target.value)}/>
            </div>
                      
            <div className="mb-3">
                <label for="department" className="form-label">Department</label>
                <input type="text" className="form-control" id="department" placeholder="Add employee department" onChange={(e)=>setDepartment(e.target.value)}/>
            </div>
            
            <div className="mb-3">
                <label for="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" placeholder="Add employee location" onChange={(e)=>setLocation(e.target.value)}/>
            </div>
                        
            <button type="submit" class="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
        </form>
        
        </div>
    )
}

export default AddEmployee;