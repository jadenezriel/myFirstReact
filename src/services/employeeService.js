/* global id */

import httpcommons from "../commons/httpcommons"

const getEmployees = () =>{
    return httpcommons.get('/employees')
}

const postEmployee = (data) =>{
    return httpcommons.post("/employees", data);
}

const putEmployee = (data) =>{
    return httpcommons.put("/employees", data);
}

const getEmployee = (employeeId) =>{
    return httpcommons.get(`/employees/${employeeId}`);
}


export default {getEmployees, postEmployee, putEmployee, getEmployee}