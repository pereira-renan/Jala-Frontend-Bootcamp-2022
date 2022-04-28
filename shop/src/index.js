import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { BookProvider } from "./BookContext"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <React.StrictMode>
    <BookProvider>
      <Router>
        <App />
      </Router>
    </BookProvider>
  </React.StrictMode>
)
