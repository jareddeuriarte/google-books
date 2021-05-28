import React from 'react';
import '../styles/footer.css'


function Footer() {

    return (
        <div className='footer-wrapper'>
            <hr id='footer-hr'></hr>
            <div id='footer-details'>
                <p>Photo by<a href='https://unsplash.com/photos/fulXJYIvRi8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Caleb Woods</a></p>
                <p>Made with 🥰 by Jared de Uriarte</p>
            </div>
        </div>

    )
}


export default Footer;