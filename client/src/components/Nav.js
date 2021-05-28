import React from 'react';
import '../styles/nav.css'

function Nav() {
    return (
        <nav className='nav'>
            <a id='title' href="/">Google Books</a>

            <a className='nav-tabs' href="/">Search</a>

            <a id='my-library'href="/saved">My Library</a>
        </nav>

    )
}

export default Nav;
