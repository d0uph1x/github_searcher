import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import Repositories from './Pages/Repositories';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/repos' component={Repositories}/>
          <Route  component={Notfound}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
