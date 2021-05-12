import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import API from '../utils/API'
import SavedBooks from '../components/SavedBooks'



function Saved() {

    const [books, setBooks] = useState([])

    const handleDeleteBook = (id) => {
        API.deleteBook(id)
        
        .then(res => loadBooks())

            .catch(err => console.log(err));
    };


    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getSavedBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Header />
            {books.length ? (
                <>
                    {
                        books.map((book, index) => (
                            <SavedBooks
                                key={index}
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                image={book.image}
                                link={book.link}
                                handleDeleteBook={() => handleDeleteBook(book.id)}
                            />
                        ))
                    }
                </>
            ) : (
                <h3>No results at this time. </h3>)
            }



        </div>
    )
}

export default Saved;
