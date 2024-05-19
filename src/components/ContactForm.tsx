import React, { useState, useEffect } from 'react';
import { Contact } from '../types'; 

// Define props interface for ContactForm component
interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
  contact?: Contact | null; 
}

// Define ContactForm component
const ContactForm: React.FC<ContactFormProps> = ({ onAddContact, contact }) => {
  
  const [firstName, setFirstName] = useState(''); // First name
  const [lastName, setLastName] = useState(''); // Last name
  const [status, setStatus] = useState<'active' | 'inactive'>('active'); // Status
  const [error, setError] = useState<string | null>(null); // Error message

  // Effect to populate form fields when editing an existing contact
  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setStatus(contact.status);
    } else {
      setFirstName('');
      setLastName('');
      setStatus('active');
    }
  }, [contact]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form fields
    if (!firstName.trim() || !lastName.trim()) {
      setError('First name and last name cannot be empty');
      return;
    }

    // Create new contact object
    const newContact: Contact = {
      id: contact ? contact.id : Date.now(),
      firstName,
      lastName,
      status,
    };

    // Add or update contact
    onAddContact(newContact);

    // Clear form fields and error message
    setFirstName('');
    setLastName('');
    setStatus('active');
    setError(null);
  };

  // Render the contact form
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
      {/* Display error message if present */}
      {error && <div className="mb-4 text-red-500">{error}</div>}
      {/* First name input field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {/* Last name input field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {/* Status radio buttons */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
        <div>
          {/* Active radio button */}
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
              className="form-radio h-4 w-4 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Active</span>
          </label>
          {/* Inactive radio button */}
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="inactive"
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
              className="form-radio h-4 w-4 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Inactive</span>
          </label>
        </div>
      </div>
      {/* Submit button */}
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {/* Display appropriate text based on whether editing or adding contact */}
          {contact ? 'Update Contact' : 'Add Contact'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm; 