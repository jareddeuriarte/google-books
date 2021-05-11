import React, { useState } from 'react';
import Header from '../components/Header';
import BookSearch from '../components/BookSearch';
import API from '../utils/API'
import SearchResults from '../components/SearchResults';

function Home() {

    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")


    const searchBooks = query => {
        API.search(query)
            .then(res => {
                console.log("API results", res.data.items)
                //updating books state 
                if ( res.data.items.length > 0 ){ 
                    setBooks(res.data.items);
                }
                
            })
            .catch(err => console.log(err));
    };

    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name, value);

        setSearch(event.target.value);
    };

    // // // When the form is submitted, search the Google Books API for `this.state.search`
    const handleFormSubmit = event => {
        event.preventDefault();

        searchBooks(search);

    };

    const handleSaveBook = book => {
        console.log("Save book number;", book)

        API.saveBook(book);
    

    };

    return (
        <div>
            <Header />
            <BookSearch
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                search={search}

            />
            {books.length ? (
                <>
                    {
                        books.map((book, index) => (
                            <SearchResults
                                key={index}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                imageLink={book.volumeInfo.imageLinks.smallThumbnail}
                                link={book.volumeInfo.infoLink}
                                handleSaveBook={() => handleSaveBook(book)}
                            />
                        ))
                    }
                </>
            ) : (
                <h3>No results found !!! </h3>)
            }



        </div>
    )
}

export default Home;