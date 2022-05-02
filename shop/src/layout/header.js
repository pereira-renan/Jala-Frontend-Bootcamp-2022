import react from "react"
import { Link } from "react-router-dom"
import "./header.css"
import { useSelector } from "react-redux"

const Header = () => {
  const cart = useSelector((state) => state.persistedReducer.product.value)
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <ul>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <ul>
              <li>
                <Link to="/books/bestSeller">BestSeller</Link>
              </li>
            </ul>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/checkout" className="bigButton">
            Your Cart ({cart.length})
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
