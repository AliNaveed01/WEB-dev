import {useState} from 'react';
import Home from './Components/Home';
import styled from "styled-components"
import GamePlay from './Components/GamePlay';

function App() {

  const[isGameStarted, setisGameStarted] = useState(false);
  const toggleGamePlay=() =>{
    setisGameStarted((prev)=> !prev);
  };


  return (
    <>
      {isGameStarted ? <GamePlay /> : <Home toggle= {toggleGamePlay}/>}  
    </>
  );
}

export default App
