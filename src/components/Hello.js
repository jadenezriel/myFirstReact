import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";

const Hello = () => {
    const [hello, setHello] = useState("api is down; sorry for the inconveniences");
    
    useEffect( () =>{
            
            helloServices.getHello()
            .then(response => {
                setHello(response.data)
            })
            .catch(err => {
                console.log("something went wrong")
            })
        }
            )
    
    return hello;
};

export default Hello