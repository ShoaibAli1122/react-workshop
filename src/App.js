import './App.css';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import AddProductForm from './components/productModule/addProductForm';
function App() {

  return (

    <>
      {/* <Link to="/contact">Contact Us Link</Link> */}
      <BrowserRouter>
        {/* <Link to="/contact">Contact Us Link</Link>
        <Link to="/about">About Us Link</Link> */}

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          {/* <Route path="/about">
            <About />
          </Route> */}

          <Route path="/about/:abcd">
            <About />
          </Route>

          <Route path="/addProduct">
            <AddProductForm />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
