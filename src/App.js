import './App.css'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'

// Page components
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Article from './pages/Article'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <nav>
          <h1>Website homepage</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/articles/:id">
            <Article />
          </Route>

          {/* This is for when a user goes to a url which does not exist */}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App
