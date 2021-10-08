import { fireEvent } from '@testing-library/dom';
import ReactDOM from 'react-dom';
import IContact from '../types/IContact';
import ContactCreate from './ContactCreate';

describe('ContactCreate Tests', () => {
    let container: HTMLDivElement;

    let fakeState: IContact[];

    const onCreate = (contact: IContact) => {
        fakeState.push(contact);
    };

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        fakeState = [];
        ReactDOM.render(<ContactCreate addContact={onCreate} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const inputs = container.querySelectorAll('input');
        const title: any = container.querySelector("h4");
        expect(title.innerHTML).toBe('Create new contact');
        expect(inputs).toHaveLength(3);
        expect(inputs[0].name).toBe('name');
        expect(inputs[1].name).toBe('phone');
        expect(inputs[2].value).toBe('New contact');
        expect(inputs[0].value).toBe('');
        expect(inputs[1].value).toBe('');
    });

    it('Create a contact correctly', () => {
        const inputs = container.querySelectorAll('input');
        const name = inputs[0];
        const phone = inputs[1];
        const btnCreate = inputs[2];
        fireEvent.change(name, { target: { value: 'momo' }});
        fireEvent.change(phone, { target: { value: 'phone' }});
        fireEvent.click(btnCreate);
        expect(fakeState.length).toBe(1);
        expect(fakeState[0].name).toBe('momo');
        expect(fakeState[0].phone).toBe('phone');
    });
});