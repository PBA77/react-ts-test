import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Components/Login'
import { Counter } from './Components/Counter'

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <nav className="navbar navbar-dark bg-primary">
            <h3>Hello World :D</h3>
            <Login />
        </nav>        
        <Counter />
      </div>
    </div>
  );
}

export default App;
