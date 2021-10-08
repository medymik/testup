import React from 'react'
import IContact from '../types/IContact'

interface Props {
    contact: IContact;
    onDelete: () => void;
    onEdit: () => void;
}

const ContactItem = ({ contact, onDelete, onEdit }: Props) => {
    return (
        <li style={{
            margin: 10
        }}>
            <span style={{ marginRight: 10}}>{ contact.name } - { contact.phone }</span>
            <button
                style={{
                    marginRight: 10
                }}
                onClick={onEdit}
            >Edit</button>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default ContactItem
