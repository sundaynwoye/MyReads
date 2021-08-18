import React from 'react';
import Books from './Books';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
  return (
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
      			    <h2 className="bookshelf-title">Currently Reading</h2>
      				<Books books={props.books.filter(book => book.shelf === 'currentlyReading')} shelfChanger={props.shelfChanger} />
    			</div>
      			<div className="bookshelf">
      				<h2 className="bookshelf-title">Want to Read</h2>
      				<Books books={props.books.filter(book => book.shelf === 'wantToRead')} shelfChanger={props.shelfChanger} />
    			</div>
      			<div className="bookshelf">
      				<h2 className="bookshelf-title">Read</h2>
      				<Books books={props.books.filter(book => book.shelf === 'read')} shelfChanger={props.shelfChanger} />
    			</div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
  )
}

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired
}

export default MainPage;