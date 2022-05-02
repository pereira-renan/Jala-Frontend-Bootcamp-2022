import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "../components/Home"
import Books from "../components/Books"
import Checkout from "../components/Checkout"
import BestSeller from "../components/BestSeller"
import BookDetail from "../components/BookDetail"
import { BookContext } from "../BookContext"
import { useSelector } from "react-redux"

function Main() {
  const selected = useSelector((state) => state.persistedReducer.showcase.value)
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/books" element={<Books />}>
          <Route path="bestSeller" element={<BestSeller />} />
          <Route path=":id" element={<BookDetail book={selected} />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <div style={{ marginTop: 200 }} />
    </>
  )
}

export default Main
