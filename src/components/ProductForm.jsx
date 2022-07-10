import { Fragment, useState } from 'react';

const ProductForm = () => {
  const [id, setId] = useState(Date.now());
  const [reference, setReference] = useState('');
  const [designation, setDesignation] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [rate, setRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Soumission du formulaire d'ajout d'un produit");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="flex flex-column items-center mt6">
        <input
          type="text"
          className="fl w-third pa2"
          placeholder="Référence"
          name="reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
        <input
          type="text"
          className="fl w-third pa2"
          placeholder="Désignation"
          name="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          min="0"
          className="fl w-third pa2"
          placeholder="Prix Unit"
          name="unitPrice"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          min="0"
          className="fl w-third pa2"
          placeholder="Taux (% TVA)"
          name="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <button type="submit" className="fl w-25 pa2 mv3">
          {'Ajouter'}
          {/* {current ? 'Mettre à jour' : 'Ajouter'} */}
        </button>
      </form>
    </Fragment>
  );
};

export default ProductForm;
