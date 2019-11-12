import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import authHOC from './utils/authHOC';

function Logout (){
    localStorage.removeItem('blogToken');
    console.log('Entre al logout');
    return <Redirect to="/login"/>
}

function Routes() {

    return(
        <>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/logout" component={authHOC(Logout)}/>
            
        </>
    );

} 

export default Routes;