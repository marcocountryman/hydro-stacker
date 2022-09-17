// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Nav from './Nav/Nav';

function App() {

  return (
    <Router>

      <div className="App">

        <Nav/>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/gallery" component = {Gallery}/>
  
      </div>
    </Router>
  );
}

export default App;
