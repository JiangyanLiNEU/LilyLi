import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import Experience from './components/Experience';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
}from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar></NavBar>
    </div>
    <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/experience" element={<Experience/>}></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
