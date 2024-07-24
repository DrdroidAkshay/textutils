import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Navbar({ title, mode,toggleMode }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode=='light'?'Enable Darkmode':'Disable Darkmode'}</label>
                    </div>
                    <div>
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-1">
                            <div style={{backgroundColor:"white",height:"30px", width:"30px", borderRadius:"100%"}}></div>
                        </li>
                        <li className="nav-item mx-1">
                            <div style={{backgroundColor:"#072d4f",height:"30px", width:"30px", borderRadius:"100%"}}></div>
                        </li>
                        <li className="nav-item mx-1">
                            <div style={{backgroundColor:"#08432e",height:"30px", width:"30px",borderRadius:"100%"}}></div>
                        </li>
                        <li className="nav-item mx-1">
                            <div style={{backgroundColor:"#054e70",height:"30px", width:"30px",borderRadius:"100%"}}></div>
                        </li>

                    </ul> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Default Title" };
export default Navbar;



