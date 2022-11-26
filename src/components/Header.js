import React from "react";
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <ul className="header">
            <li>
                <Link to="/" >홈</Link>
            </li>
            <li>
                <Link to="/title" >제목</Link>
            </li>
            <li>
                <Link to="/gnere" >장르</Link>
            </li>
            <li>
                <Link to="/broadcaster" >방송사</Link>
            </li>
        </ul>
    )
}

export default Header;