import React from 'react';
// import Home from '../pages/Home'

function BookSearch(props) {
console.log(props);
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="search">Search Google Books:</label>
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
