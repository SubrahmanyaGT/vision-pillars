import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import TagLine from "./components/TagLine";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="screen-padding">
    <TagLine/>
      </div>
    </div>
  );
}

export default App;
