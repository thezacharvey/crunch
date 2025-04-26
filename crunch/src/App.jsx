import { useState } from 'react'
import xOut from './assets/x_out.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[xOp, setX] = useState(0);

  return (
    /*
    <>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save meh test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </
    */

    <>
    <div>

      <div id = "pref-item-descr">Exclusion </div>
      <div id = "pref-container">
      <div class = "pref-item">nuts <img   class = "x-out"src={xOut} alt={"x out"}/>  </div>
      <div class = "pref-item">dairy <img  class = "x-out"src={xOut} alt={"x out"}/></div>
      <div class = "pref-item">meat<img  class = "x-out"src={xOut} alt={"x out"}/></div>
      </div>

    </div>
    
    </>
    
   
  )
}

export default App
