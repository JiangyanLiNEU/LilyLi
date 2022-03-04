import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import Experience from './components/Experience';
import Blog from "./components/Blog";
import {
  HashRouter as Router,
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
      <Route exact path="/blog" element={<Blog/>}></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
