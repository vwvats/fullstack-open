const Course = ({ courses }) => {
  return courses.map((course) => {
    return <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        total of {course.parts.reduce((acc, curr) => acc + curr.exercises, 0)}{" "}
        exercises
      </p>
    </div>;
  });
};

export default Course;
