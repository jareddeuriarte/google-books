import React from 'react';
import '../styles/header.css'


function Header() {

    return (
        <div className='hero'>
            <div className='headerContainer'>
                <h1>Google Books Library</h1>
                <h4>Search and save to your library books from the Google Books API <span role='img' aria-label='book emoji'>📚</span></h4>
            </div>
        </div>

    )
}


export default Header;