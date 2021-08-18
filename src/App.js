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
  
  showSearchPage = () => {
    this.setState({ showSearchPage: true })
  }
  
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         <SearchPage books={this.state.books} /> 
        ) : (
          <MainPage books={this.state.books} showSearchPage={this.showSearchPage} />
        )}
      </div>
    )
  }
}

export default BooksApp
