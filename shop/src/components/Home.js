import react, { useEffect, useReducer, useState } from "react"
import jaguar from "../assets/jaguar.jpeg"
import BookCard from "./BookCard"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../redux/reducer/counterReducer"

const Main = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, true)

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.persistedReducer.counter)

  return (
    <section>
      <div className="bookShowcase">
        <h1>Welcome to Jaguar Bookstore</h1>
        <img src={jaguar} alt="This is a jaguar" />
        <h3>This is an image</h3>
        <h3>And this is a counter to spend time on</h3>

        <button
          className="bigButton"
          style={{ marginTop: "10px" }}
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          className="bigButton"
          style={{ marginTop: "10px" }}
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <h3>counter: {counter}</h3>
      </div>
    </section>
  )
}

export default Main
