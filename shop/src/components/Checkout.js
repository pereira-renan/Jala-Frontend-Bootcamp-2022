import react, { useEffect, useReducer, useState } from "react"
import jaguar from "../assets/jaguar.jpeg"
import BookCard from "./BookCard"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../redux/reducer/counterReducer"
import { removeProduct } from "../redux/reducer/shopReducer"
import { Link } from "react-router-dom"

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

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.persistedReducer.product.value)

  return (
    <section>
      <h1>Your Shopping Cart</h1>
      {cart.length != 0 ? (
        <div className="bookDiv">
          <div className="bookList">
            {cart?.map((book) => (
              <div className="bookShowcase">
                <button
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    padding: "4px",
                  }}
                  className="bigButton"
                  onClick={() => dispatch(removeProduct(book))}
                >
                  {" "}
                  X
                </button>
                <BookCard book={book} key={book.id} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="bookEmptyCart">
            Oh no, you forgot your books on another page!
            <Link to="/books" className="bigButton" style={{}}>
              Go back
            </Link>
          </div>
        </>
      )}
    </section>
  )
}

export default Main
