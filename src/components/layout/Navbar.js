import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedIn'
import SignedOutLinks from './SignedOut'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
       
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)