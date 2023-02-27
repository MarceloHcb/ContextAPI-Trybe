import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
    
const Private = ({Item}) => {
    const { signed } = useAuth();    
    return signed > 0 ? <Item /> : <SignIn />;
}

const RouteApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes>                
                <Route exact path="/home" element={<Private Item={Home} />} />
                <Route path="/" element={<SignIn />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route path="*" element={<SignIn />} />
            </Routes>
        </Fragment>
        </BrowserRouter>
    )   
}

export default RouteApp