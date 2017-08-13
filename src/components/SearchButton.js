import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function SearchButton (props) {
  return(
    <div className="open-search">
      <Link
        to="/search">Search Books</Link>
    </div>
  )
}

export default SearchButton
