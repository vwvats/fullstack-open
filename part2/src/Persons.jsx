const Persons = ({ phonebook, filterQuery }) => {
  const filterName = (personObj) =>
    personObj.name.toLowerCase().includes(filterQuery);

  return (
    <ul>
      {phonebook.filter(filterName).map((person) => (
        <li key={person.name}>
          {person.name} {person.phone}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
