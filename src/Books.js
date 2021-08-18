import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  return (
    <div className="bookshelf-books">
                    <ol className="books-grid">
    				  {props.books.map((book) => (
    					<li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
  						))} 
                    </ol>
                  </div>
  )
}

Books.propTypes = {
books: PropTypes.array.isRequired
}

export default Books;