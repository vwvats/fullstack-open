import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (type) => {
    switch(type) {
      case 'good':
        return () => setGood(good + 1);
      case 'neutral':
        return () => setNeutral(neutral + 1);
      case 'bad':
        return () => setBad(bad + 1);
      default:
        break;
    }
  }

  return (
    <div>
     <h2>give feedback</h2>
     <button onClick={handleClick('good')}>Good</button>
     <button onClick={handleClick('neutral')}>Neutral</button>
     <button onClick={handleClick('bad')}>Bad</button>
     <h2>statistics</h2>
     <p>good {good}</p>
     <p>neutral {neutral}</p>
     <p>bad {bad}</p>
     <p>all {good + neutral + bad}</p>
     <p>average {(good * 1 + bad * -1) / (good + neutral + bad)}</p>
     <p>positive {good / (good + neutral + bad)}%</p>
    </div>
  )
};

export default App;
