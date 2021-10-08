
import { fireEvent } from '@testing-library/dom';
import ReactDOM from 'react-dom';
import IContact from '../types/IContact';
import ContactList from './ContactList';

describe('ContactList Tests', () => {
    let container: HTMLDivElement;

    let fakeState: IContact[];

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        fakeState = [
            {
                id: 1,
                name: 'momo',
                phone: '0666666666'
            }
        ]
        ReactDOM.render(<ContactList onDelete={() => {}} contacts={fakeState} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const items:any = container.querySelectorAll('span');
        expect(items).toHaveLength(1);
        expect(items[0].innerHTML).toEqual(fakeState[0].name + " - " + fakeState[0].phone);
    });
});