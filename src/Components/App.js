import './App.css';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom'
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Navbar from './Nav/Navbar';
import Shop from './Shop/Shop';
import Learn from './Learn/Learn';
import Footer from './Footer/Footer';
import ContactForm  from './Contact/ContactForm';

function App() {

  return (
    <Router>
      <div className="App">

        <Navbar/>

        <Switch>
          
          <Route path = "/shop">
            <Shop/>
          </Route>
          
          <Route path = "/gallery">
            <Gallery/>
          </Route>

          <Route path = "/learn">
            <Learn/>
          </Route>

          <Route path = "/contact">
            <ContactForm/>
          </Route>
          
          <Route path = "/">
            <Home/>
          </Route>
        
        </Switch>

        <Footer/>

      </div>
     </Router>
  );
}

export default App;
