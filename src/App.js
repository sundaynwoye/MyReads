import React  from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
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
  
  shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((res) => {
      book.shelf = shelf;
      this.setState((currentState) => ({
        books: currentState.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }
  
  render() {
    return (
      <div className="app">
      <Route path='/search' render={() => (
      <SearchPage books={this.state.books} shelfChanger={this.shelfChanger} />
    )} />
		<Route exact path='/' render={() => (
          <MainPage books={this.state.books} showSearchPage={this.showSearchPage} shelfChanger={this.shelfChanger} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
