const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {good + neutral + bad}</p>
          <p>average {(good * 1 + bad * -1) / (good + neutral + bad)}</p>
          <p>positive {good / (good + neutral + bad)}%</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Statistics;
