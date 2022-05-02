import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { BookProvider } from "./BookContext"
import { Provider } from "react-redux"
import store from "./redux/store"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/lib/integration/react"

const root = ReactDOM.createRoot(document.querySelector("#root"))

const persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
