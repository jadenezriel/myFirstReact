import httpcommons from "../commons/httpcommons"

const getEmployees = () =>{
    return httpcommons.get('/employees')
}

export default {getEmployees}