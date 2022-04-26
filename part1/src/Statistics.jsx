const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good * 1 + bad * -1) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={`${good / (good + neutral + bad) * 100}%`} />
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Statistics;
