import "./App.css"
import Footer from "./layout/footer"
import Header from "./layout/header"
import Main from "./layout/main"

function App() {
  const show = false

  return (
    <>
      <Header />
      <Main show={show} />
      <Footer />
    </>
  )
}

export default App
