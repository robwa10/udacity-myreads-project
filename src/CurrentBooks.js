import React from 'react';
import BookShelf from './components/BookShelf';
import SearchButton from './components/SearchButton';
import './App.css';


function CurrentBooks (props) {
    return (
    <div>
      <BookShelf
        title="Currently Reading"
        books={props.filterBookShelf("currentlyReading")}
        moveBook={props.moveBook}
      />
      <BookShelf
        title="Want To Read"
        books={props.filterBookShelf("wantToRead")}
        moveBook={props.moveBook}
      />
      <BookShelf
        title="Read"
        books={props.filterBookShelf("read")}
        moveBook={props.moveBook}
      />
      <SearchButton/>
    </div>
    );
}

export default CurrentBooks;
