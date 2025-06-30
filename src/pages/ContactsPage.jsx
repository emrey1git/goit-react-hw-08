import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { setFilter } from "../redux/filters/slice";
import { selectFilter } from "../redux/filters/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import { selectFilteredContacts } from "../redux/contacts/selectors";

const containerStyle = {
  maxWidth: "800px",
  margin: "40px auto",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  boxShadow: "0 0 10px rgba(0,0,0,0.05)",
};

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  return (
    <div style={containerStyle}>
      <ContactForm />
      <SearchBox filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
