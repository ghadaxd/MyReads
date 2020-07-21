import React from "react";
import { Link } from "react-router-dom";
import { Bookshelf } from "./Bookshelf";
import { getAll, update } from "../BooksAPI";

class Library extends React.Component {
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
                  shelfTitle={shelf.shelfTitle}
                  books={shelf.books}
                  key={shelf.id}
                  updateBook={this.updateBook}
                />
              ))
            )}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Library;
