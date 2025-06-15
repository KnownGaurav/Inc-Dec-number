import { useState } from 'react'
import './App.css'

function App(){
  return(
    <div>
      <States />
    </div>
  )
}

function States(){
  const [value, setvalue]= useState(0);

  function increase(){
    setvalue(value+1);
}

  function decrease(){
    setvalue(value-1);
  }

  function clear(){
    setvalue(0);
  }

  return(  
  <div>
    <span id='heading'>Inc-dec-number</span>
    <div>
      <h1 class="button">{value}</h1>
      <button class="button" onClick={increase}>+</button>
      <button class="button" onClick={decrease}>-</button>
      <button class="button"onClick={clear}>clear</button>
      </div>
      </div>
  );
}

export default App