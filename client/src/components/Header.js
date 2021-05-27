import React from 'react';
import '../styles/header.css'


function Header() {

    return (
        <div className='hero'>
            <div className='headerContainer'>
                <h1>Google Books Library</h1>
                <h4>Search Google Books API and save volumes to your library <span role='img' aria-label='book emoji'>📚</span></h4>
            </div>
        </div>

    )
}


export default Header;