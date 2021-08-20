import React, { Component } from 'react';
import Books from './Books';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  static proptypes = {
    books: PropTypes.array.isRequired,
    shelfChanger: PropTypes.func.isRequired
  }
  
  state = {
    query: '',
    searchedBooks: []
  }
  
  updateQuery = (query) => {
    BooksAPI.search(query.trim(), 20)
    .then((books) => {
      const searchedBooks = Array.isArray(books) ? books : [];
      searchedBooks.map(searchedBook => {
        const checkBook = this.props.books.find(b => b.id === searchedBook.id); 
        return checkBook ? searchedBook.shelf = checkBook.shelf : searchedBook.shelf = 'none'
      })
      this.setState(() => ({
      query: query,
        searchedBooks: searchedBooks
    }))
    })
  }
  
  render() {
    const { query, searchedBooks } = this.state;
    
    const showingSearchBooks = query === '' ? [] : searchedBooks.filter(b => (
      b.title.toLowerCase().includes(query.toLowerCase())
    ))
    
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
				  type="text" 
				  placeholder="Search by title or author" 
				  value={query} 
				  onChange={(event) => this.updateQuery(event.target.value)}
				/>

              </div>
            </div>
            <div className="search-books-results">
              <Books books={showingSearchBooks} shelfChanger={this.props.shelfChanger} />
            </div>
          </div>
    )
  }
}

export default SearchPage;