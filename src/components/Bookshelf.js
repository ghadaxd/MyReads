import React from "react";
import { Book } from "./Book";

export const Bookshelf = (props) => {
  // Will have the data of books, that belongs to a certain shelf type, which been displayed.
  // It will also have the functionality where of adding and removing a book from a shelf.
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
