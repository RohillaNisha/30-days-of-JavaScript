import { useState , useEffect} from 'react'

import '../styling/timer.css'

function Timer() {

    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
      if (!isRunning) return;
    
      const interval =  setInterval( () => {
        setSec((prevSec) => {
          if (prevSec === 59) {
            setMin((prevMin) => prevMin +1);
            return 0;
          }
          return prevSec + 1;
        });
      }, 1000);
    
      // cleanup function to clear the interval when the component unmounts or when the timer stops
    
      return () => clearInterval(interval);
    
    }, [isRunning]); // depencemdy array is "isRunning" re runs when isRunning changes
    
      const startTimer = () => {
    
      setIsRunning(true);
        };
      const stopTimer = () => {
     setIsRunning(false)
      };
      const resetTimer = () => {
        setIsRunning(false);
        setSec(0);
        setMin(0);
      };
      return (
        <div className="timer">
          <h1>Timer</h1>
          <span> {min} mins </span>
          <span> {sec} secs</span>
          <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      );
}

export default Timer