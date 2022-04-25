import "./App.css";
import Main from "./components/main";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  const show = false;

  return (
    <>
      <Header />
      <Main show={show} />
      <Footer />
    </>
  );
}

export default App;
