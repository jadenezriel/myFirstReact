import axios from "axios";

export default axios.create({
        baseURL:'http://https://samplefullstack2.herokuapp.com/',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        }
        })