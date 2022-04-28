import React from "react"
import "./BookCard.css"

export default function BookCard({ book }) {
  return (
    <>
      <div>
        <h1>Your Selected Book</h1>
      </div>
      <div className="bookDiv">
        <div className="bookShowcase">
          <div className="bookCard__container">
            <div className="bookCard_thumbnail__container">
              <img
                className="bookCard_thumbnail__image"
                src={
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail
                }
                alt=""
              />
            </div>
            <div className="bookCard_data__container">
              <div className="bookCard_title__container">
                <div className="bookCard_title__text">
                  {book.volumeInfo.title && book.volumeInfo.title}
                </div>
                <div className="bookCard_author__text">
                  {book.volumeInfo.authors && book.volumeInfo.authors[0]}
                </div>
                <div className="bookCard_ratings__text">
                  {book.volumeInfo.averageRating == null
                    ? 0 + " stars"
                    : book.volumeInfo.averageRating + " stars"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
