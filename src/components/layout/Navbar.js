import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);
  const links=auth.uid? <SignedIn/>:<SignedOut/>
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        {links}
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