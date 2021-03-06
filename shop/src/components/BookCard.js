import React, { useContext, useState } from "react"
import "./BookCard.css"
import { BookContext } from "../BookContext"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/reducer/shopReducer"
import { selectProduct } from "../redux/reducer/showcaseReducer"

export default function BookCard({ book }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div
      className="bookCard__container"
      onClick={() => {
        dispatch(selectProduct(book))
        navigate(`/books/${book.id}`)
      }}
    >
      <div className="bookCard_thumbnail__container">
        <img
          className="bookCard_thumbnail__image"
          src={
            book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
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
  )
}
