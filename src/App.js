import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>

        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          {" "}
          <small> Coded by Raquel Wetzel</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
