import logo from "./logo.svg";
import "./App.css";
import PlayerForm from "./components/PlayerForm";
import Board from "./components/Board";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>TIC TAC TOE</h1>
      <PlayerForm />
    </div>
  );
}

export default App;
