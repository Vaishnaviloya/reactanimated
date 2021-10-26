import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './ReactMenu/Home';
import About from './ReactMenu/About';
import Contact from './ReactMenu/Contact';
import Service from './ReactMenu/Service';
import NavBar from './ReactMenu/NavBar';
import Footer from './ReactMenu/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path = '/' component ={Home} />
          <Route exact path = '/about' component ={About} />
          <Route exact path = '/contact' component ={Contact} />
          <Route exact path = '/service' component ={Service} />
          <Redirect to = '/'/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
