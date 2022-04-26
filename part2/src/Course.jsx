const Course = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

export default Course;