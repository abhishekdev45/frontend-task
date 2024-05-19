import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addContact, deleteContact, updateContact } from '../features/contactSlice';
import { Contact } from '../types';
import { FaTimes } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [editContact, setEditContact] = useState<Contact | null>(null);
  const contacts = useAppSelector((state) => state.contacts.contacts);
  const dispatch = useAppDispatch();

  const handleAddContact = (contact: Contact) => {
    if (editContact) {
      dispatch(updateContact(contact));
      setEditContact(null);
    } else {
      dispatch(addContact(contact));
    }
    setShowForm(false);
  };

  const handleEditContact = (contact: Contact) => {
    setEditContact(contact);
    setShowForm(true);
  };

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Management</h1>
      <div className="flex items-center justify-center">
        {!showForm && (
          <button
            onClick={() => {
              setShowForm(true);
              setEditContact(null);
            }}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-green-600"
          >
            Create Contact
          </button>
        )}
      </div>

      {showForm ? (
        <ContactForm onAddContact={handleAddContact} contact={editContact} />
      ) : (
        <>
          {contacts.length === 0 ? (
            <div className="m-8 p-4 bg-gray-100 border border-gray-300 flex items-center justify-center rounded-lg">
              <FaTimes className="text-red-500 mr-2" />
              <span>No contacts found. Please add a contact using the "Create Contact" button.</span>
            </div>
          ) : (
            <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} onEditContact={handleEditContact} />
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
