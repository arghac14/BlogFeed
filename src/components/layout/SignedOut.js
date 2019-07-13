import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

const SignedOut=()=>{
    return(
        <div className="navbar">
        <nav className="nav-wrapper blue darken -5">
            <Link to='/' className="brand-logo"> BlogFeed</Link>
            <ul className="right">
                <li><NavLink to='/'>Sign Up</NavLink></li>
                <li><NavLink to='/'>Log In</NavLink></li>
                
            </ul>
        </nav>
        </div>
               
    )
}
export default SignedOut;