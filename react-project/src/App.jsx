import { useState } from "react";
import "./App.css";
import ironandink from "./images/ironandinkimg.jpg";

function Header({ feeling }) {
  return (
    <header>
      <h1>{feeling ? "It's Thul Time!!!" : "it is NOT thul time..."}</h1>
      <h2>{feeling ? "lets get toolin'" : "lets go home :("}</h2>
    </header>
  );
}

const items = ["Smokin' Aces", "Iron & Ink", "Illinois Tattoo Co."];

const parlorMap = items.map((location, i) => ({
  id: i,
  location: location,
}));

function Main({ parlor }) {
  return (
    <>
      <main>
        <img
          src={ironandink}
          height={100}
          alt="The logo for Iron & Ink Tattoo Company"
        />
        <ul>
          {parlor.map((parlor) => (
            <li key={parlor.id} style={{ listStyleType: "none" }}>
              {parlor.location}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <button onClick={() => setStatus(!status)}>
        victor nation... how we feeling?
      </button>
      <h1>Andrew is currently feeling {status ? "good" : "bad"}!</h1>
      <Header feeling={status} />
      <Main year={new Date().getFullYear()} parlor={parlorMap} />
    </div>
  );
}

export default App;
