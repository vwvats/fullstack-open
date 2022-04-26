import { useState } from "react";
import Statistics from "./Statistics";
import { anecdotes } from "./anecdotes";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));
  const copy = [...votes];

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

  const ButtonComponent = ({ text, clickMe }) => (
    <button onClick={clickMe}>{text}</button>
  );

  return (
    <div>
      <h2>Give Feedback</h2>
      <ButtonComponent text="Good" clickMe={handleClick("good")} />
      <ButtonComponent text="Neutral" clickMe={handleClick("neutral")} />
      <ButtonComponent text="Bad" clickMe={handleClick("bad")} />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <h2>Anecdote of the day</h2>
      <h4>{anecdotes[selected]}</h4>
      <p>has {votes[selected]} votes</p>
      <ButtonComponent
        text="vote"
        clickMe={() => { 
          copy[selected] += 1;
          setVotes(copy); 
        }}
      />
      <ButtonComponent
        text="Next Anecdote"
        clickMe={() => setSelected(Math.floor(Math.random() * 7))}
      />
      <h2>Anecdote with most votes</h2>
      <h4>{anecdotes[votes.indexOf(Math.max(...votes))]}</h4>
    </div>
  );
};

export default App;
