import React from "react";
import Bookshelf from "./Bookshelf";
import { getAll } from "../BooksAPI";

class Library extends React.Component {
  state = {
    bookshelfTypes: [],
  };

  componentDidMount() {
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
            shelfType: "Currently Reading",
            books: booksCurrentlyReading,
          },
          { id: 1, shelfType: "Want to Read", books: booksWantToRead },
          { id: 2, shelfType: "Read", books: booksRead },
        ],
      });
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.bookshelfTypes.length === 0 ? (
              <p>Loading ...</p>
            ) : (
              this.state.bookshelfTypes.map((shelf) => (
                <Bookshelf
                  shelfTitle={shelf.shelfType}
                  books={shelf.books}
                  key={shelf.id}
                />
              ))
            )}
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default Library;
