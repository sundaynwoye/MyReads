import React, { Component } from 'react';
import Books from './Books';

class SearchPage extends Component {
  state = {
    query: ''
  }
  
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  
  render() {
    const { query } = this.state;
    const { books } = this.props;
    
    const showingSearchBooks = query === '' ? books : books.filter(b => (
      b.title.toLowerCase().includes(query.toLowerCase())
    ))
    
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
              <Books books={showingSearchBooks} />
            </div>
          </div>
    )
  }
}

export default SearchPage;