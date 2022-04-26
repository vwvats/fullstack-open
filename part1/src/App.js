import { useState } from "react";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (type) => {
    switch (type) {
      case "good":
        return () => setGood(good + 1);
      case "neutral":
        return () => setNeutral(neutral + 1);
      case "bad":
        return () => setBad(bad + 1);
      default:
        break;
    }
  };

  const StatButton = ({ text, clickMe }) => <button onClick={clickMe}>{text}</button>;

  return (
    <div>
      <h2>give feedback</h2>
      <StatButton text="Good" clickMe={handleClick("good")} />
      <StatButton text="Neutral" clickMe={handleClick("neutral")} />
      <StatButton text="Bad" clickMe={handleClick("bad")} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
