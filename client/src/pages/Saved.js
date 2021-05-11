import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import API from '../utils/API'
import SavedBooks from '../components/SavedBooks'



function Saved() {

    const [books, setBooks] = useState([])


    const savedBooks = () => {
        console.log("HELLO ")
        API.getSavedBooks()
            .then(res => {
                console.log("API getSavedBooks", res)
                return res; 
    
            })
            .catch(err => console.log(err));
    };

    const handleDeleteBook = (id) => {
        API.deleteBook(id)
        .then (res => {
            console.log('Book Deleted!' + id)
        })
        .catch(err => console.log(err));
    };


  

    useEffect(() => {
        if (!books) {
          return;
        }
    
        // API.getSavedBooks()
        // .then(res => {
        //     console.log("API getSavedBooks", res)
        //   setBooks(res);

        // })
        // .catch(err => console.log(err));
        const value = savedBooks(); 
        console.log("books", value)
        if ( value !== undefined){
            setBooks(value);
        }

      }, [books]);




    return (
        <div>
            <Header />
            {books.length ? (
                <>
                    {
                        books.map((book, index) => (
                            <SavedBooks
                                key={index}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                imageLink={book.volumeInfo.imageLinks.smallThumbnail}
                                link={book.volumeInfo.infoLink}
                                handleDeleteBook={() => handleDeleteBook(book.id)}
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

export default Saved;
