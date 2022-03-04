import {HomePage} from "./components/HomePage";
import {Experience} from './components/Experience';
import {Blog} from "./components/Blog";
import {Switch, Link, Route, HashRouter as Router} from 'react-router-dom';

export const App = () => {
  return (
    <div>
    <Router hashType='noslash'  basename={window.localStorage.pathname || ''}>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/experience" component={Experience}/>
      <Route path="/blog" component={Blog}/>
    </Switch>
    </Router>
    </div>
  );
}
