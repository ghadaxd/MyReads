import React from "react";

class Bookshelf extends React.Component {
  // Will have the data of books, that belongs to a certain shelf type, which been displayed.
  // It will also have the functionality where of adding and removing a book from a shelf.
  render() {
    const { shelfTitle } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>{/* Here we will iterates books array to display them */}</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;