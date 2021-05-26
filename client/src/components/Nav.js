import React from 'react';
import '../styles/nav.css'

function Nav() {
    return (
        <nav className='nav'>
            <a className='books' href="/">Google Books</a>

            <a href="/">Search</a>

            <a href="/saved">My Library</a>
        </nav>

    )
}

export default Nav;
