import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subMenu, subMenuAll } from '../../data/SubMenuData';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './subnav.css';

const Subnav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="sub_navbar">
            <div className="sub_navbar_data-toggle">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="sub_navbar_data-toggle-container">
                        {subMenuAll.map((item, index) => (
                            <Link className="sub_navbar_data-toggle-container-link" to={item.link} key={index}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
                <span>All</span>
            </div>
            <div className="sub_navbar-data">
                {subMenu.map((item, index) => (
                    <Link className="sub_navbar-link" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Subnav
