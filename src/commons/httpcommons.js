import axios from "axios";

export default axios.create({
        baseURL:'http://https://samplefullstack3.herokuapp.com/',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        }
        })