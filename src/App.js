import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <a className="nav-link active" href="/">Home</a>
          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/users">Users</a>
        </nav>
        
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/users"><Users/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;


{/* <header className="App-header">
  Hello World
</header> */}


{/* <nav className="nav">
  <a className="nav-link active" href="#">Active</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
</nav> */}