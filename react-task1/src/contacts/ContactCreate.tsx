import React, { useState } from 'react';
import IContact from '../types/IContact';

interface Props {
    addContact: (contact: IContact) => void;
}

const ContactCreate = ({ addContact }: Props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addContact({
            name,
            phone
        })
        setName('');
        setPhone('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Create new contact</h4>
            <div>
                <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input type="text" name="phone" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="New contact" />
            </div>
        </form>
    )
}

export default ContactCreate
