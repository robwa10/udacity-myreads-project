import React from 'react';
import '../App.css';
import MoveBookButton from './MoveBookButton.js';


function Book (props) {
  return (
  <div className="book" id={props.book.id}>
    <div className="book-top">
      <div className="book-cover"
        style={{backgroundImage: `url("${props.book.imageLinks.thumbnail}")`}}>
        </div>
      <MoveBookButton
        moveBook={props.moveBook}
        shelf={props.shelf}
        book={props.book}
      />
    </div>
    <div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">
        {props.book.authors ? props.book.authors.join(', ') : ''}
      </div>
    </div>
  </div>
  );
}

export default Book;
