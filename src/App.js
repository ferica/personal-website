import './App.css';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Painting from './components/Painting/Painting';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';


function App() {
  return (
    <div className='App'>
      <Router>
          <Switch> 

            <Route exact path="/">  
              {/* putting Navbar in here so it only shows in this route (don't want it in painting and 404) */}
              <Navbar /> 
              {/* for page jumping */}
              <Home />
              <a id='about'> <About /> </a>
              <a id='experience'> <Experience/> </a>
              <a id='projects'> <Projects /> </a>
              <a id='contact'> <Contact /> </a>
            </Route>  

            <Route exact path="/painting" component={ Painting } /> 

            {/* if route doesn't exist, redirect to 404 page */}
            <Route path="*" component={ PageNotFound } /> 
            <Redirect to="*" />

          </Switch>
        </Router>
    </div>
  );
}

export default App;
