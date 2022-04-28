import axios from "axios";
const baseUrl = "/api/persons";

const getAllContacts = () => {
  return axios.get(baseUrl);
};

const createContact = (newContact) => {
  return axios.post(baseUrl, newContact);
};

const deleteContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const updateContact = (id, updatedContact) => {
  return axios.put(`${baseUrl}/${id}`, updatedContact);
}

const phonebookService = { getAllContacts, createContact, deleteContact, updateContact };

export default phonebookService;
