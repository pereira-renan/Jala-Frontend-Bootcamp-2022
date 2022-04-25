import react, { useEffect, useReducer, useState } from "react"
import jaguar from "../assets/jaguar.jpeg"
import BookCard from "./BookCard"

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

const Main = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, true)
  // const [checked, setChecked] = useState(true);
  const [data, setData] = useState(null)

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
  }, [])

  useEffect(() => {
    console.log("%c%s", "color: #1d5673", data)
  }, [data])

  function checkData() {
    console.log(data)
  }

  return (
    <section>
      <input
        type="checkbox"
        checked={checked}
        value={checked}
        onChange={setChecked}
      />

      <button onClick={checkData}>Check Data</button>

      <div className="bookDiv">
        <div className="bookList">
          {data && data.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
      {/*
          Create a component which receives
          the list of products and parse into a component 
          using loops to pass each object as props
      */}

      <h3>This is an image</h3>
      <img src={jaguar} alt="This is a jaguar" />
    </section>
  )
}

export default Main
