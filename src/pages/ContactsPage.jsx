import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { setFilter } from "../redux/filters/slice";
import { selectFilter } from "../redux/filters/selectors";

import { fetchContacts } from "../redux/contacts/operations";
import { selectFilteredContacts } from "../redux/contacts/selectors";


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
    <>
      <ContactForm />
      <SearchBox filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default ContactsPage;
