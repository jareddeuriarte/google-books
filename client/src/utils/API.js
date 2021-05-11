import axios from "axios";

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q='
const APIKEY = '&key=AIzaSyAd_7Ux1Xig4BjN-8yTmTuZwgIiQKv96jQ'

export default {
  search: function (query) {
    console.log("URL: ", BASEURL + query.replaceAll(' ', '+') + APIKEY); 
    return axios.get(BASEURL + query.replaceAll(' ', '+')  + APIKEY);
  },

  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
    console.log(bookData)
  }
};