const Persons = ({ phonebook, filterQuery }) => {
  const filterName = (personObj) =>
    personObj.name.toLowerCase().includes(filterQuery.toLowerCase());

  return (
    <ul>
      {phonebook.filter(filterName).map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
