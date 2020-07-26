import React from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import { Book } from "./Book";

class SearchBooks extends React.Component {
  state = {
    results: [],
  };

  search = (query) => {
    search(query).then((data) => {
      if (data !== undefined && data.error === undefined) {
        const results = data.map((book) => {
          let shelfType = "none";
          this.props.data.every((bookshelf) => {
            const isFound = bookshelf.books.find(
              (bookInLibrary) => bookInLibrary.id === book.id
            );
            if (isFound !== undefined) {
              shelfType = bookshelf.shelfType;
              return false;
            }
            return true;
          });
          return { ...book, shelf: shelfType };
        });
        this.setState({
          results,
        });
      } else {
        this.setState({
          results: [],
        });
      }
    });
  };

  updateBook = (book, shelfType) => {
    this.props.updateBook(book, shelfType);
    const updatedResults = this.state.results;
    updatedResults.every((bookFromResults) => {
      if (bookFromResults.id === book.id) {
        bookFromResults.shelf = shelfType;
        return false;
      } else {
        return true;
      }
    });

    this.setState({
      results: [...updatedResults],
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onInput={(e) => this.search(e.target.value)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results &&
              this.state.results.error !== "empty query" &&
              this.state.results.map((book) => (
                <Book data={book} key={book.id} updateBook={this.updateBook} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
