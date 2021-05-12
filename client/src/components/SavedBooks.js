import React from 'react';
import '../styles/searchResults.css'




function SavedBooks({ title, authors, description, link, image, handleDeleteBook }) {

    return (

        <div className='flexContainer'>
            <div className="resultsContainer">

                <div className='imgAndBtn'>
                    <img src={image} alt={title} />
                    <button onClick={handleDeleteBook}>Delete</button>

                </div>

                <div className='details'>
                    <h3>{title}</h3>
                    <h5>By: {authors}</h5>
                    <p>{description}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" >View Book</a>
                </div>

            </div>
        </div>
    );




}

export default SavedBooks;