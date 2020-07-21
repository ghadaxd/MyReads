import React from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import { Book } from "./Book";

import { update } from "../BooksAPI";

class SearchBooks extends React.Component {
  state = {
    query: "",
    results: [],
  };

  search = (query) => {
    search(query).then((data) => {
      this.setState({ query, results: data });
    });
  };

  updateBook = (book, shelfType) => {
    update(book, shelfType).then((data) => {
      this.search(this.state.query);
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
            <li>{/* Here we will iterates books results to display them */}</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
