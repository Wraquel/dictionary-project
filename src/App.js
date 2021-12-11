import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="magma" />
        </main>
        <footer className="text-center">
          {" "}
          <small>
            {" "}
            <a href="/">Open-source</a> by Raquel Wetzel
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
