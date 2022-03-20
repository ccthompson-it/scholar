import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

import { login, logout } from "../helpers/login"

function Header(props) {
    const { dispatch } = props
    return (
        <header>
            <div className="header-nav">
                <div className="header-logo-container">
                    <img src="/images/logo.png" alt="image" className="header-logo"/>
                </div>
                <div className="header-account-icons">
                {!props.login ? 
                    <Link to="/profile" onClick={() => { login(dispatch) }}>Login</Link> 
                :
                    <Fragment>
                        <Link to="/profile">Profile</Link>
                        <Link to="/teacher" onClick={() => { logout(dispatch) }}>Logout</Link>
                    </Fragment>
                }    
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Header)