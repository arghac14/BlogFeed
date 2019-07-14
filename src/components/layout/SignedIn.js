import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

const SignedIn=()=>{
    return(
        <div className="navbar">
        <nav className="nav-wrapper blue darken -5">
            {/* <Link to='/' className="brand-logo"> BlogFeed</Link> */}
            <ul className="right">
                <li><NavLink to='/createproject'>Add Content</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighen-2"></NavLink></li>
            </ul>
        </nav>
        </div>
               
    )
}
export default SignedIn;