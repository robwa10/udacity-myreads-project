import React, { Component } from 'react';
import '../App.css'


class MoveBookButton extends Component {
  moveThisBook = (event) => {
    this.props.moveBook(this.props.book, event.target.value);
  };

  render() {
    return (
    <div className="book-shelf-changer">
      <select onChange={this.moveThisBook} value={this.props.shelf}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    );
  }
}

export default MoveBookButton
