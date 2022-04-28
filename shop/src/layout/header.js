import react from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
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
    </nav>
  )
}

export default Header
