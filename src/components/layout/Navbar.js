import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
const Navbar=()=>{
    return(
        <div className="navbar">
        <nav className="nav-wrapper blue darken -5">
            <Link to='/' className="brand-logo"> BlogFeed</Link>
        
        <SignedIn/>
        <SignedOut/>
        </nav>
        </div>
               
    )
}
export default Navbar;