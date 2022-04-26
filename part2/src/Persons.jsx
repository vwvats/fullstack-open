import phonebookService from "./phonebookService";

const Persons = ({ phonebook, filterQuery, handleDelete }) => {
  const filterName = (personObj) =>
    personObj.name.toLowerCase().includes(filterQuery.toLowerCase());

  const handleClick = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService.deleteContact(id).then(() => handleDelete());
    }
  };

  return (
    <ul>
      {phonebook.filter(filterName).map((person) => (
        <li key={person.id}>
          <button
            style={{ marginRight: 10 }}
            onClick={() => handleClick(person.name, person.id)}
          >
            Delete
          </button>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
