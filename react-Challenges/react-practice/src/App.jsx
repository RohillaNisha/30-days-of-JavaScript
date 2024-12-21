import ProgressBar from './components/progressBar';
import Timer from './components/timer';
import { useState } from 'react'
import './styling/progressBar.css'


function App() {

  const [val, setVal] = useState(0);
 
  return (
    <>
      <div className="App">
    <h1>Progress bar</h1>
    <ProgressBar width={val} />
    <form>
      <label >Input Percentage:</label>
      <input type="number" value= {val} onChange={ (e) => setVal(e.target.value)} />
    </form>
  </div>
  <Timer/>

    </>
  
  );
 
}

export default App
