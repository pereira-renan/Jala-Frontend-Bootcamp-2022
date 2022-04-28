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

      <div className="bookShowcase">
        <h1>Welcome to Jaguar Bookstore</h1>
        <img src={jaguar} alt="This is a jaguar" />

        <h3>This is an image</h3>
      </div>
    </section>
  )
}

export default Main
