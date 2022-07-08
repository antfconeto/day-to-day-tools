import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
const Routers = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<h1>Home</h1>}></Route>
            <Route path="/*" element={<Navigate to="/"/>}></Route>
        </Routes>
    )
}

export default Routers;