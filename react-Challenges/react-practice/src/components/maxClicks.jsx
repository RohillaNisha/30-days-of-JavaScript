import  {useState, useEffect} from 'react'
import '../styling/maxClicks.css'

function MaxClicks() {

  const [time, setTime] = useState(10);
  const [timesUp, setTimesUp] = useState(false);
  const [clickCount, setClickCount] =  useState(0);

  useEffect( () => {

    let interval = setInterval( () => {
      setTime((prevTime) => {
        if(prevTime === 0 ){
          setTimesUp(true);
          return 0;
      }
      return prevTime -1;
    });     

    }, 1000)

    return () => clearInterval(interval);
  }, [timesUp, time])

  const handleClickCount = () => {
    setClickCount(clickCount+1);
    
     };

  return (
    <div>
    <h1 className="headingText">
      No. of Clicks until timer expires
    </h1>
    <div className='canvasBox'>
      <div className="clickCount"> {clickCount} </div>
      <div className='timerBox'>
        <p>Time left: <span> {time} </span> seconds</p>
        { !timesUp ? (<button onClick={handleClickCount}>+</button>): (<div>
          Time Up
        </div>)}
        
      </div>
    </div>

    </div>
  )
}

export default MaxClicks