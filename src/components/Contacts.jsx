import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContactStore } from '../contactStore';
import { isEmptyObject } from '../utils';
import ContactItem from './ContactItem';
import loader from '../img/loader.svg';

const Contacts = () => {
  const fetchContacts = useContactStore((state) => state.fetchContacts);
  const contacts = useContactStore((state) => state.contacts);
  const loading = useContactStore((state) => state.loading);

  useEffect(() => {
    fetchContacts();
    console.log('contacts : ', contacts);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <img src={loader} className="App-logo" alt="loading..." width={300} height={300} />
      </div>
    );
  }

  return (
    <div className="tc">
      <h1>Contacts</h1>
      <div className="flex justify-center">
        <table className="collapse pa2">
          <thead>
            <tr>
              <th className="pa2 tl">Nom</th>
              <th className="pa2 tl">E-mail</th>
              <th className="pa2 tl">Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {(contacts !== null || !isEmptyObject(contacts)) &&
              contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}
          </tbody>
        </table>
      </div>
      <button className="pa2 ma2 bg-dark-pink bn br-pill">
        <Link to="/add-update-contact" className="link white">
          Ajouter
        </Link>
      </button>
    </div>
  );
};

export default Contacts;
