import React from 'react';
import '../App.css';
import MoveBookButton from './MoveBookButton.js';


function Book (props) {
  return (
  <div className="book" id={props.book.id}>
    <div className="book-top">
      <div className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${props.book.imageLinks.thumbnail}")`
        }}></div>
      <MoveBookButton
        moveBook={props.moveBook}
        shelf={props.shelf}
        book={props.book}
      />
    </div>
    <div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  </div>
  );
}

export default Book
