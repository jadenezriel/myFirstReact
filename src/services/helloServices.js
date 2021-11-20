import httpcommons from "../commons/httpcommons";

const getHello = () => {
    return httpcommons.get('/hello')
}

export default {getHello}