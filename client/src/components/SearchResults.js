import React from 'react';
import '../styles/searchResults.css'




function SearchResults({title, authors, description, link, imageLink, handleSaveBook}){


    

        return(

            <div className='flexContainer'>
            <div className="resultsContainer">
                
                <div className='imgAndBtn'>
                    <img src={imageLink} alt={title} />
                    <button onClick={handleSaveBook}>Save book to library. </button>
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

export default SearchResults;
