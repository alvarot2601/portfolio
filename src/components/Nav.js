import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCubes, faHouse, faListCheck } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <nav>
            <a href="#">
                <FontAwesomeIcon icon={faHouse} />
            </a>
            <a>
                <FontAwesomeIcon icon={faCubes} />
            </a>
            <a>
                <FontAwesomeIcon icon={faListCheck} />
            </a>
        </nav>
    );
}
export default Nav;