import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
import PageNotFound from './PageNotFound';

const Router = () =>{
    return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path ="/myfirstreact" element={<Home/>}/>
                        <Route exact path ="/employees" element={<Employee/>}/>
                        <Route exact path ="/add" element={<AddEmployee/>}/>
                        <Route exact path ="/edit/:employeeId" element={<AddEmployee/>}/>
                        <Route exact path ="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            )
    }
    
    export default Router;