import { useState } from "react";
import FilterPhoneBook from "./FilterPhonebook";
import PhonebookForm from "./PhonebookForm";
import Persons from "./Persons";

const dummyData = [
  { name: "Arto Hellas", phone: "39-44-5323523" },
  { name: "Sunder Pichai", phone: "39-44-5323543" },
  { name: "Satya Nadella", phone: "39-44-5323563" },
  { name: "Elon Musk", phone: "39-44-5323533" },
  { name: "Jeff Bezos", phone: "39-44-5323513" },
];

const App = () => {
  const [persons, setPersons] = useState(dummyData);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isPresent = (personObj) => personObj.name === newName;
    if (persons.some(isPresent)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName, phone: newPhone }]);
      setNewName("");
      setNewPhone("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPhoneBook value={filterQuery} onQuery={(e) => setFilterQuery(e.target.value)} />
      <h2>Add New</h2>
      <PhonebookForm
        name={newName}
        phone={newPhone}
        handleName={(e) => setNewName(e.target.value)}
        handlePhone={(e) => setNewPhone(e.target.value)}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons phonebook={persons} filterQuery={filterQuery} />
    </div>
  );
};

export default App;
