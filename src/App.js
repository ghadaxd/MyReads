import React from "react";
import "./App.css";
import { getAll, update } from "./BooksAPI";

import { Route } from "react-router-dom";

import Library from "./components/Library";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {
  state = {
    bookshelfTypes: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    getAll().then((data) => {
      const booksWantToRead = data.filter(
        (book) => book.shelf === "wantToRead"
      );
      const booksCurrentlyReading = data.filter(
        (book) => book.shelf === "currentlyReading"
      );
      const booksRead = data.filter((book) => book.shelf === "read");

      this.setState({
        bookshelfTypes: [
          {
            id: 0,
            shelfType: "currentlyReading",
            shelfTitle: "Currently Reading",
            books: booksCurrentlyReading,
          },
          {
            id: 1,
            shelfType: "wantToRead",
            shelfTitle: "Want to Read",
            books: booksWantToRead,
          },
          { id: 2, shelfType: "read", shelfTitle: "Read", books: booksRead },
        ],
      });
    });
  };

  updateBook = (book, shelfType) => {
    update(book, shelfType).then((data) => {
      this.getBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Library
              data={this.state.bookshelfTypes}
              updateBook={this.updateBook}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              data={this.state.bookshelfTypes}
              updateBook={this.updateBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
