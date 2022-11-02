import { Route, Router, Switch } from "react-router-dom";
import API from "./components/API/api";
import Home from "./components/Home/home";
import SignIn from "./components/Login/login";
import Navbar from "./components/Navbar/navbar";
import SignUp from "./components/Register/register";

function Main() {
    return ( 
        <>
        <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={SignIn}/>
                <Route exact path='/register' component={SignUp}/>
                <Route exact path='/api' component={API}/>
            </Switch>
        </>
     );
}

export default Main;