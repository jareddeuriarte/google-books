import React from 'react';


//.map over the search results into a divs 

function SearchResults({title, authors, description, link, imageLink, handleSaveBook}){


    

        return(

            <div className="container">
                <h1>{title}</h1>
                <h2>Written By: {authors}</h2>
                <p>{description}</p>
                <img src={imageLink} alt={title} />
                <a href={link} target="_blank" rel="noopener noreferrer" >View Book</a>
                <button onClick={handleSaveBook}>Save book to library. </button>
               
            </div>
            );


    

}

export default SearchResults;
