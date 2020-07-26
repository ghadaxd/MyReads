import React from "react";
import { Link } from "react-router-dom";
import { Bookshelf } from "./Bookshelf";

const Library = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {props.data.length === 0 ? (
            <p>Loading ...</p>
          ) : (
            props.data.map((shelf) => (
              <Bookshelf
                shelfTitle={shelf.shelfTitle}
                books={shelf.books}
                key={shelf.id}
                updateBook={props.updateBook}
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
};

export default Library;
