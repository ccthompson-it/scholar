import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
            <div className="header-nav">
                <div className="header-logo-container">
                    <img src="/images/logo.png" alt="image" className="header-logo"></img>
                </div>
                <div className="header-account-icons">
                    <Link to="profile">Sign In</Link>
                </div>
            </div>
        </header>
    );
}
