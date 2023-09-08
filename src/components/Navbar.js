import React, { useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    // hamburger function 
    const [ham, setHam] = useState(false);
    const toggle = () => {
        setHam(!ham)
    }
    const location = useLocation();


    return (
        <>
            <nav className="navbar">
                <div className="logo-section">
                    <div className="logo-name">
                        <h3>TAKE <span>NOVAK</span></h3>
                    </div>
                </div>

                <div className="ul-secction">
                    <ul>
                        <li><NavLink className="dots" activeClassName="active" to={"/"}>RatPark</NavLink></li>
                        <li><NavLink className="dots" activeClassName="active" to={"/non_pro"}>NonPro</NavLink></li>
                        <li><NavLink className="dots" activeClassName="active" to={"/take_fountain"}>TakeFountain</NavLink></li>
                        <li><NavLink className="dots" activeClassName="active" to={"/freaks_of"}>Freaks</NavLink></li>
                        <li><NavLink className="dots" activeClassName="active" to={"/rat_audio"}>Audios</NavLink></li>
                        <li><NavLink className="dots" activeClassName="active" to={"/excerpts"}>Excerpt</NavLink></li>
                        <li><NavLink className="dots" activeClassName="active" to={"/podcast"}>Podcast</NavLink></li>
                        <li><NavLink className="dots" activeClassName="active" to={"/park_shirt"}>Swag</NavLink></li>
                        <li><NavLink className="dots" activeClassName="active" to={"/adam_novak"}>Author</NavLink></li>
                    </ul>
                </div>

                <div className="hamburger" onClick={toggle}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>

            <div className={`drop ${ham ? "d-flex" : ""}`}>
                <ul onClick={toggle}>
                    <li><NavLink className="dots" activeClassName="active" to={"/"}>Rat Park</NavLink></li>
                    <li><NavLink className="dots" activeClassName="active" to={"/non_pro"}>Non Pro</NavLink></li>
                    <li><NavLink className="dots" activeClassName="active" to={"/take_fountain"}>Take Fountain</NavLink></li>
                    <li><NavLink className="dots" activeClassName="active" to={"/freaks_of"}>Freaks</NavLink></li>
                    <li><NavLink className="dots" activeClassName="active" to={"/rat_audio"}>Audios</NavLink></li>
                    <li><NavLink className="dots" activeClassName="active" to={"/excerpts"}>Excerpt</NavLink></li>
                    <li><NavLink className="dots" activeClassName="active" to={"/podcast"}>Podcast</NavLink></li>
                    <li><NavLink className="dots" activeClassName="active" to={"/park_shirt"}>Swag</NavLink></li>
                    <li><NavLink className="dots" activeClassName="active" to={"/adam_novak"}>Author</NavLink></li>
                </ul>
            </div>

            <Outlet />
        </>
    )
}

export default Navbar