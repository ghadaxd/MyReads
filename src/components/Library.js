import React from "react";
import Bookshelf from "./Bookshelf";
// import * as BooksAPI from './BooksAPI'

class Library extends React.Component {
  // It will get the data of books and send it to the shelf that its belong to.
  state = {
    bookshelfTypes: [
      { id: 0, shelfType: "Currently Reading" },
      { id: 1, shelfType: "Want to Read" },
      { id: 2, shelfType: "Read" },
    ],
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.bookshelfTypes.map((shelf) => (
              <Bookshelf shelfTitle={shelf.shelfType} key={shelf.id} />
            ))}
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
