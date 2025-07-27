import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    username: "shivling",
    age: 22,
  };

  return (
    <>
      <h1>Tailwin Testing</h1>
      <Card username="Shivling Kumar" btntext = "Click Me" />
      <Card username= "Rajnish Kumar" btntext = "Sibmite me "/>
      <Card username= "Kya hal Hai Bhai" btntext = "Book Now"/>
    </>
  );
}

export default App;
