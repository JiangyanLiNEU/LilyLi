import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import Experience from './components/Experience';
import Blog from "./components/Blog";
import {Switch, Link, Route, HashRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router hashType='noslash' basename={window.localStorage.pathname || ''}>
    <Switch>
      <Route exact path="/" component={<HomePage/>}></Route>
      <Route path="/experience" component={<Experience/>}></Route>
      <Route path="/blog" component={<Blog/>}></Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
