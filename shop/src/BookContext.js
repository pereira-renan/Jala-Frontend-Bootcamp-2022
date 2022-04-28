import React, { useState, createContext } from "react"

const BookContext = createContext(0)

const BookProvider = ({ children }) => {
  const [selected, setSelected] = useState(null)

  return (
    <BookContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export { BookContext, BookProvider }
