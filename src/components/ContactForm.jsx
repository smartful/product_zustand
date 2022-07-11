import { Fragment, useState } from 'react';

const ContactForm = () => {
  const [id, setId] = useState(Date.now());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Soumission du formulaire d'ajout d'un contact");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="flex flex-column items-center mt6">
        <input
          type="text"
          className="fl w-third pa2"
          placeholder="Nom"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="fl w-third pa2"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="phone"
          className="fl w-third pa2"
          placeholder="Téléphone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit" className="fl w-25 pa2 mv3">
          {'Ajouter'}
          {/* {current ? 'Mettre à jour' : 'Ajouter'} */}
        </button>
      </form>
    </Fragment>
  );
};

export default ContactForm;
