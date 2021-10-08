import React, { useState } from 'react';
import IContact from '../types/IContact';

interface Props {
    editContact: (contact: IContact) => void;
    contact: IContact;
}

const ContactEdit = ({ editContact, contact }: Props) => {
    const [name, setName] = useState(contact.name);
    const [phone, setPhone] = useState(contact.phone);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        editContact({
            name,
            phone
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Edit contact</h4>
            <div>
                <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input type="text" name="phone" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Update" />
            </div>
        </form>
    )
}

export default ContactEdit;
