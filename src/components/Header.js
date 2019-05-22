import React from 'react';

import {Link} from "react-router-dom";
import '../App.css';

class Header extends React.Component{
    render(){
        return(
            <div>
                <header className="header-area">
                    <div className="main-header-area">
                    <div className="classy-nav-container breakpoint-off">
                        <nav className="classy-navbar justify-content-between" id="pnNav">
                        <div className="classy-menu">
                            <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                            </div>
                            <div className="classynav">
                            <ul id="nav">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/profile'>Profile</Link></li>
                                <li><Link to='/portofolio'>Portofolio</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;
