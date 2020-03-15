import React from 'react';
import hc from './Header.module.css'

const logo = 'https://vysteh.com/wp-content/uploads/2019/11/dims-23.jpg';
const Header = () => {
    return (
        <header className={hc.header}>
            <img src = {logo}/>
            <span className={hc.text}>LEARN</span>
        </header>
    )
}

export default Header;