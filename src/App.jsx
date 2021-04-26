import logo from "./logo.svg";
import "./App.css";
import Header from "./Navigation/header";
import Routes from "./System/route";

function App() {
  return (
    <div className="App">
      <Header />
      {Routes}
    </div>
  );
}

export default App;
