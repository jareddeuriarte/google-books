import React, { useState } from 'react';
import Header from '../components/Header';
import BookSearch from '../components/BookSearch';
import API from '../utils/API'
import SearchResults from '../components/SearchResults';
import '../styles/home.css'

function Home() {

    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")


    const searchBooks = query => {
        API.search(query)
            .then(res => {
                console.log("API results", res.data.items)
                //updating books state 
                if (res.data.items.length > 0) {
                    setBooks(res.data.items);
                }

            })
            .catch(err => console.log(err));
    };

    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        console.log(name, value);

        setSearch(event.target.value);
    };

    // // // When the form is submitted, search the Google Books API for `this.state.search`
    const handleFormSubmit = event => {
        event.preventDefault();

        searchBooks(search);

    };

    const handleSaveBook = book => {
        console.log("Save book number;", book)

        const bookData = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.smallThumbnail,
            link: book.volumeInfo.infoLink,
            bookId: book.id
        }

        API.saveBook(bookData).then(res => {
            console.log("API savebook", res)

        })
            .catch(err => console.log(err));


    };


    return (
        <div>
            <Header/>
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
                                imageLink={book.volumeInfo.imageLinks == null ? 'https://via.placeholder.com/150' : book.volumeInfo.imageLinks.smallThumbnail }
                                link={book.volumeInfo.infoLink}
                                handleSaveBook={() => handleSaveBook(book)}
                            />
                        ))
                    }
                </>
            ) : (
                <h3 id='no-results-message'>Search by key terms to browse volumes.</h3>)
            }



        </div>
    )
}

export default Home;
