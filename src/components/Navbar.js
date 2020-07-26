import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-white fixed-top">
            <div className="container">
                <div className="navbar-brand">Telzir</div>
                <form className="form-inline">                
                <span className="nav-icon material-icons">menu</span>
                </form>
            </div>           
        </nav>
    )
}
