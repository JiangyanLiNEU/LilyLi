import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <HomePage></HomePage>
      <Router></Router>
    </div>
  );
}

export default App;
