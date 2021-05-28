import React from 'react';
import '../styles/savedBooks.css'




function SavedBooks({ title, authors, description, link, image, handleDeleteBook }) {

    return (
<div>

        <div className='saved-wrapper'>

                <div className='saved-img-wrapper'>
                    <img src={image} alt={title} />

                </div>

                <div className='saved-details-wrapper'>
                    <h2>{title}</h2>
                    <h5>By: {authors}</h5>
                    <p>{description}</p>

                    <div className='saved-button-wrapper'>
                    <a id='saved-view-book-button' href={link} target="_blank" rel="noopener noreferrer" >View Book</a>
                    <button onClick={handleDeleteBook}>Delete</button>
                    </div>
                </div>

            
        </div>

        <hr></hr>
        </div>
    );




}

export default SavedBooks;