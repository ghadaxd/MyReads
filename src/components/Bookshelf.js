import React from "react";
import { Book } from "./Book";

export const Bookshelf = (props) => {
  const { shelfTitle, books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book data={book} key={book.id} updateBook={props.updateBook} />
          ))}
        </ol>
      </div>
    </div>
  );
};
