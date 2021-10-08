import { fireEvent } from '@testing-library/dom';
import ReactDOM from 'react-dom';
import IContact from '../types/IContact';
import ContactItem from './ContactItem';

describe('ContactItem Tests', () => {
    let container: HTMLDivElement;

    let fakeProp: IContact = {
        name: "momo",
        phone: "0666666666"
    }

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ContactItem onEdit={() => {}} onDelete={() => {}} contact={fakeProp} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const spans:any = container.querySelector('span');
        expect(spans.innerHTML).toBe(fakeProp.name + " - " + fakeProp.phone);
    });
});