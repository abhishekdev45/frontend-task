import React from 'react';
import { Contact } from '../types'; 

// Define props interface for ContactList component
interface ContactListProps {
  contacts: Contact[]; 
  onEditContact: (contact: Contact) => void; 
  onDeleteContact: (id: number) => void; 
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onEditContact, onDeleteContact }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="bg-white rounded-lg shadow-md p-4 m-2">
          {/* Display contact name */}
          <p className="text-lg font-semibold">{contact.firstName} {contact.lastName}</p>
          {/* Display contact status */}
          <p>Status: {contact.status}</p>
          
          <div className="flex justify-end mt-4">
            {/* Edit button */}
            <button onClick={() => onEditContact(contact)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
              Edit
            </button>
            {/* Delete button */}
            <button onClick={() => onDeleteContact(contact.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
