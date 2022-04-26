import { useState, useEffect } from "react";
import axios from "axios";
import FilterPhoneBook from "./FilterPhonebook";
import PhonebookForm from "./PhonebookForm";
import Persons from "./Persons";

// EXTRA CREDIT
import CountrySearch from "./CountrySearch";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

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
      <FilterPhoneBook
        value={filterQuery}
        onQuery={(e) => setFilterQuery(e.target.value)}
      />
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
      <CountrySearch />
    </div>
  );
};

export default App;
