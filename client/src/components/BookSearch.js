import React from 'react';
import '../styles/bookSearch.css'

function BookSearch(props) {
console.log(props);
        return (
            <div className='search-container'>
                <form>
                    <div className="form-group">
                        <input
                            onChange={props.handleInputChange}
                            value={props.search}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search by key term"
                            id="search"
                        />
                        <button onClick={props.handleFormSubmit}>
                            Search
                        </button>
                    </div>
                </form >
            </div>
        )
}

export default BookSearch;
