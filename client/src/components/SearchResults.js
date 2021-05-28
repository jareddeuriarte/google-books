import React from 'react';
import '../styles/searchResults.css'




function SearchResults({ title, authors, description, link, imageLink, handleSaveBook }) {




    return (
        
        <div>
        <div className='results-wrapper'>


            <div className='img-wrapper'>
                <img src={imageLink} alt={title} />
            </div>

            <div className='details-wrapper'>
                <h2>{title}</h2>
                <h5>By: {authors}</h5>
                <p>{description}</p>

                <div className='button-wrapper'>
                    <a id='view-book-button'href={link} target="_blank" rel="noopener noreferrer" >View Book</a>
                    <button id='save-button' onClick={handleSaveBook}>Save to library. </button>
                </div>
            </div>

        


        </div>


            <hr></hr>
            </div>
    );




}

export default SearchResults;
