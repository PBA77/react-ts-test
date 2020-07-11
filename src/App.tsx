import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import createRef from 'react'
import Login from './Components/Login';
import { Counter } from './Components/Counter';
import BetterCounter from './Components/BetterCounter';
import BestCounter from './Components/BestCounter';

export const UserContext = React.createContext({name : "Boomer"});

function App() {
   return (
    <div className="App">
      <div className="container-xl">
        <nav className="navbar navbar-dark bg-primary">
          <h3>Hello {} :D</h3>
          <Login />
        </nav>
        <hr></hr>
        <Counter />
        <hr></hr>
        <BetterCounter />
        <hr></hr>
        <UserContext.Provider value={{name:"Boomer"}}>
          <BestCounter />
        </UserContext.Provider>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
