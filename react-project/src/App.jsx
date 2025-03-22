import "./App.css";

function Header({ name }) {
  return (
    <header>
      <h1>It's {name} Time!!!</h1>
      <h2>lets get toolin'</h2>
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
    <main>
      <ul>
        {parlor.map((parlor) => (
          <li key={parlor.id} style={{ listStyleType: "none" }}>
            {parlor.location}
          </li>
        ))}
      </ul>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header name="Thul" />
      <Main year={new Date().getFullYear()} parlor={parlorMap} />
    </div>
  );
}

export default App;
