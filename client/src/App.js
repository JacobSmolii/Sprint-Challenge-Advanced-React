import React from 'react';
import './App.css';
import UserRequest from "./UserRequest";
import {useMousePosition} from './useMousePosition'

function App() {
    const position = useMousePosition();

  return (
    <div className={position.x > 500 ? 'dark' : 'white'}>
        {position.x > 500 ? console.log("Now is red color",position.x) : console.log("Now is blue color",position.y) }
      <UserRequest/>
      Vlad
    </div>
  );
}
export default App;
