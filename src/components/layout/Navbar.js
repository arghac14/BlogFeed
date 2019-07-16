import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import {connect} from 'react-redux'
const Navbar=()=>{
    return(
        <div className="navbar">
        <nav className="nav-wrapper blue darken -5">
           
        
        <SignedIn/>
        <SignedOut/>
        </nav>
        </div>

    )
}
const mapStateToProps=(state)=>{
    
}
export default Navbar;