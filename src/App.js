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
    <Switch>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/experience" element={<Experience/>}></Route>
      <Route exact path="/blog" element={<Blog/>}></Route>
    </Switch>
    </Router>
    
  );
}

export default App;
