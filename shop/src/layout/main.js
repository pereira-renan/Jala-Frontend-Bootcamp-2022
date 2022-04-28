import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "../components/Home"
import Books from "../components/Books"
import BestSeller from "../components/BestSeller"
import BookDetail from "../components/BookDetail"
import { BookContext } from "../BookContext"

function Main() {
  const { selected } = useContext(BookContext)
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/books" element={<Books />}>
          <Route path="bestSeller" element={<BestSeller />} />
          <Route path=":id" element={<BookDetail book={selected} />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <div style={{ marginTop: 200 }} />
    </>
  )
}

export default Main
