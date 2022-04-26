import { useState, useEffect } from "react";
import phonebookService from "./phonebookService";
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

  const fetchContacts = () => {
    phonebookService
      .getAllContacts()
      .then((response) => setPersons(response.data));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isPresent = (personObj) => personObj.name === newName;
    if (persons.some(isPresent)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace old number with this new one?`
        )
      ) {
        const oldContactIndex = persons.findIndex(isPresent);
        const updatedContact = {
          ...persons[oldContactIndex],
          number: newPhone,
        };
        phonebookService
          .updateContact(persons[oldContactIndex].id, updatedContact)
          .then(() => fetchContacts());
      }
    } else {
      phonebookService
        .createContact({
          name: newName,
          number: newPhone,
          id: Math.random() * Math.random(),
        })
        .then((response) => {
          const data = response.data;
          setPersons([
            ...persons,
            { name: data.name, number: data.number, id: data.id },
          ]);
        });
    }
    setNewName("");
    setNewPhone("");
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
      <Persons
        phonebook={persons}
        filterQuery={filterQuery}
        handleDelete={fetchContacts}
      />
      <CountrySearch />
    </div>
  );
};

export default App;
