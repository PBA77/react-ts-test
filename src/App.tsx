import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Components/Login';
import YoutubeBox from './Components/YotubeBox/YoutubeBox';

export const UserContext = React.createContext({name : "Boomer"});

function App() {
   return (
    <div className="App">
      <div className="container-fluid">
        <nav className="navbar navbar-dark bg-primary">
          <h2>Clue.to! {}</h2>
          <Login />
        </nav>
        <hr></hr>        
        <YoutubeBox />
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
