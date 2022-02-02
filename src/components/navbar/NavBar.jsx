import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" id="navbar_brand-logo" href="/">Philmazone</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fa fa-bars" style={{ color: 'white' }}></i></span>
                </button>
                <div className="navbar_location-logo"><i className="fas fa-map-marker-alt"></i></div>
                    <div className='navbar_location'>
                    <span className='navbar_location-to'>
                            Deliver to
                        </span>
                    <span className='navbar_location-where'>
                            Nigeria
                        </span>
                    </div>
                <div className="navbar_search-input">
                    <form method="GET" placeholder="">
                        <select>
                            <option value="all">All</option>
                            <option value="all accessories">all accessories</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Wears">Wears</option>
                            <option value="kitchen">Kitchen</option>
                        </select>
                        <input type="search" placeholder="" />
                        <span className="navbar_search-right">
                            <button type="button"><i id="navbar_search-logo" class="fas fa-search"></i></button>
                        </span>
                    </form>
                </div>
                <div className="navbar_right-style">
                    
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav" id="navbar_nav">
                        <li className="nav-item">
                                <a className="nav-link" href="/">
                                <span className="navbar_flag-dropdown">
                                    <span><i id="navbar_flag" className="flag-icon flag-icon-us"></i></span>
                                    <span><i id="navbar_dropdown" className="fas fa-caret-down"></i></span>
                                </span>
                                </a>
                        </li>
                        <li className="nav-item">
                            <a id="nav_link-1" className="nav-link" href="/">
                            <div className="navbar_line-container1">
                                <span className="nav_line-1" >Hello, Sign on</span> 
                            </div> 
                             <span className="nav_line-3">Account & List</span>
                                <i id="navbar_caret" className="fas fa-caret-down"></i>
                            </a>
                        </li>
                        <li id="nav_link-2" className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="navbar_line-container2">
                                    <span className="nav_line-2">Return</span>
                                </div>
                                <span className="nav_line-4">& Order</span>
                            </a>
                        </li>
                        <li id="nav_link-3" className="nav-item">
                            <a className="nav-link" href="/"><i id="nav_cart" className="fas fa-shopping-cart"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
