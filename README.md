## MyReads React App

This is a project based on the starter template provided for Udacity's React Fundamentals course. It was completed to reinforce React fundamentals of state management, component construction, JSX, page routing and linking.


## Getting Started
### Installation

Clone the repository using:
`git clone https://github.com/robwa10/udacity-myreads-project.git`

Install node dependencies using:
`npm install`

### Running the app
Run the app in development mode using:
`npm start`


## App Features

### Homepage
Features 3 bookshelves with the following headings:
* Currently Reading
* Want To Read
* Read

Books can be moved between shelves and persist between page refresh.

### Search page
Features a search bar. Results are returned and sorted as the user types.

Books can be moved from the Search page to shelves on the Homepage.


## Backend Server

A backend server is provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
