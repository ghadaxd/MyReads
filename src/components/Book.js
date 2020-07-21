import React from "react";

export const Book = (props) => {
  const { data } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${data.imageLinks.thumbnail}")`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(e) => props.updateBook(data, e.target.value)}
              value={data.shelf || "none"}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{data.title}</div>
        <div className="book-authors">
          {data.authors &&
            data.authors.map((author, index) => (
              <span key={index}>
                {author}
                <br />
              </span>
            ))}
        </div>
      </div>
    </li>
  );
};
