import React from 'react'
import IContact from '../types/IContact'
import ContactItem from './ContactItem'

interface Props {
    contacts: IContact[];
    onDelete: (contact: IContact) => void;
    onEdit: (contact: IContact) => void;
}

const ContactList = ({ contacts, onDelete, onEdit }: Props) => {
    return (
        <div>
           { contacts.map(contact => (
               <ContactItem onEdit={() => onEdit(contact)} onDelete={() => onDelete(contact)} key={contact.id} contact={contact} />
           ))} 
        </div>
    );
}

export default ContactList
