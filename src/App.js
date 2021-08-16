import React  from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }
  
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         <SearchPage /> 
        ) : (
          <MainPage books={this.state.books} />
        )}
      </div>
    )
  }
}

export default BooksApp
