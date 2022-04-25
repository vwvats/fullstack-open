const Total = ({ exercises }) => (
  <p>
    Number of exercises{" "}
    {exercises.reduce((acc, curr) => acc + curr.exercises, 0)}
  </p>
);

export default Total;
