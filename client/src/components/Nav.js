import React from 'react';
import '../styles/nav.css'

function Nav() {
    return (
        <nav className='nav' >
            <a href="/">Google Books</a>

            <a href="/">Search</a>

            <a href="/saved">Saved</a>
        </nav>

    )
}

export default Nav;
