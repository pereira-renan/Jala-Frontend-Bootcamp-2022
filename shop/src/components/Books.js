import react, { useContext, useEffect, useReducer, useState } from "react"
import { Outlet } from "react-router-dom"
import jaguar from "../assets/jaguar.jpeg"
import BookCard from "./BookCard"
import { BookContext } from "../BookContext"

// const Secret = () => <h1>This is a secret component</h1>;

// const Default = () => <h1>This is the default stuff</h1>;

// const Main = (props) => {
//   if (props.show) {
//     return <Secret />;
//   } else {
//     return <Default />;
//   }
// };

// const Main = ({ show }) => <>{show ? <Secret /> : <Default />}</>;

const Books = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, true)
  // const [checked, setChecked] = useState(true);
  const [data, setData] = useState(null)
  const { selected, setSelected } = useContext(BookContext)

  useEffect(() => {
    console.log("%c%s", "color: #00b300", checked)
  }, [checked])

  useEffect(() => {
    const fetchData = async () => {
      const subject = "lord of the rings"
      const totalResults = "40"
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${subject}&langRestrict=en&startIndex=0&maxResults=${totalResults}`
      )
      const json = await data.json()
      return json
    }

    fetchData()
      .catch(console.error)
      .then((data) => setData(data.items))

    console.log(data)
  }, [])

  useEffect(() => {
    console.log("%c%s", "color: #1d5673", data)
  }, [data])

  function checkData() {
    console.log(data)
  }

  function checkSelected() {
    console.log(selected)
  }

  return (
    <section>
      <Outlet />

      <h1>Jaguar Bookstore</h1>
      <div className="bookShowcase">
        <button onClick={checkData}>Check Data</button>
        <button onClick={checkSelected}>Check Selected</button>
        <h4>
          Navigate through our best books selection using the navigation bar
          above or click a book below to read more about it
        </h4>
      </div>

      <div className="bookDiv">
        <div className="bookList">
          {data && data.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    </section>
  )
}

export default Books
