
import axios from "axios";
import React from "react";
import Constants from "@/utils/constants";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const useContactsData = () => {

  const [contacts, setContacts] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/contacts`).then((response) => {
      setContacts(response.data);
    });
  }, []);
  return contacts;
}

export const useContactData = (id) => {

  const [contact, setContact] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/contacts/`+ id).then((response) => {
      setContact(response.data);
    });
  }, []);
  return contact;
}

