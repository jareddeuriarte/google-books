import React from 'react';
import '../styles/header.css'


function Header() {

    return (
        <div className='hero'>
            <div className='title-conatiner'>
                <h1 id='hero-title'>My Google Books</h1>
                <h4 id='hero-subtitle'>Search Google Books API and save volumes to your library <span role='img' aria-label='book emoji'>📚</span></h4>
            </div>
        </div>

    )
}


export default Header;