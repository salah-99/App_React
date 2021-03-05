import './App.css';
import Category from './route/category';
import Login from './route/login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Category" component={Category} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
