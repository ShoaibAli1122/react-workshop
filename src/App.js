import './App.css';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
function App() {

  return (

    <>
      {/* <Link to="/contact">Contact Us Link</Link> */}
      <BrowserRouter>
        <Link to="/contact">Contact Us Link</Link>
        <Link to="/about">About Us Link</Link>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
