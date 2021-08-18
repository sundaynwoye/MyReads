import React, {Component} from 'react';
import Books from './Books';
import PropTypes from 'prop-types';

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
      			    <h2 className="bookshelf-title">Currently Reading</h2>
      				<Books books={this.props.books.filter(book => book.shelf === 'currentlyReading')} shelfChanger={this.props.shelfChanger} />
    			</div>
      			<div className="bookshelf">
      				<h2 className="bookshelf-title">Want to Read</h2>
      				<Books books={this.props.books.filter(book => book.shelf === 'wantToRead')} shelfChanger={this.props.shelfChanger} />
    			</div>
      			<div className="bookshelf">
      				<h2 className="bookshelf-title">Read</h2>
      				<Books books={this.props.books.filter(book => book.shelf === 'read')} shelfChanger={this.props.shelfChanger} />
    			</div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={this.props.showSearchPage}>Add a book</a>
            </div>
          </div>
    )
  }
}

MainPage.propTypes = {
  books: PropTypes.array.isRequired
}

export default MainPage;